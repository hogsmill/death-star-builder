#!/bin/bash

FORCE=false
NEW=false
while [ $1 ]
do
  echo $1
  if [ "$1" == "-f" ]; then
    FORCE=true
  fi
  if [ "$1" == "-n" ]; then
    NEW=true
  fi
  shift
done

REPO="https://github.com/hogsmill/death-stat-builder.git"
APPS=(
  'death-star-builder,deathStarBuilderGames,deathStarBuilder,3054,Death Star Builder'
  'death-star-builder-dex,deathStarBuilderGamesDex,deathStarBuilderDex,3055,Death Star Builder Dex'
)

for ((i = 0; i < ${#APPS[@]}; i++))
do
  REC="${APPS[$i]}"

  APP=`echo $REC | cut -d, -f1`
  GAMESCOLLECTION=`echo $REC | cut -d, -f2`
  COLLECTION=`echo $REC | cut -d, -f3`
  PORT=`echo $REC | cut -d, -f4`
  APPNAME=`echo $REC | cut -d, -f5`

  echo "------------------------------------------------"
  if [ -z "$APPNAME" ]; then
    echo "Installing $APPTYPE:$APP ($COLLECTION, $GAMESCOLLECTION, $PORT)"
  else
    echo "Installing $APPTYPE:$APP ($COLLECTION, $GAMESCOLLECTION, $PORT, $APPNAME)"
  fi
  echo "------------------------------------------------"

  DIR="/usr/apps/$APP"
  if [ ! -d $DIR ]; then
    git clone $REPO $DIR
  fi
  ENVFILE="$DIR/.env"
  echo "VUE_APP_PORT=$PORT" > $ENVFILE
  echo "VUE_APP_GAMES_COLLECTION=$GAMESCOLLECTION" >> $ENVFILE
  echo "VUE_APP_COLLECTION=$COLLECTION" >> $ENVFILE
    if [ ! -z "$APPNAME" ]; then
    echo "VUE_APP_NAME=$APPNAME" >> $ENVFILE
  fi

  cd $DIR

  rm $DIR/package-lock.json
  rm -rf $DIR/node_modules

  PWD=`pwd`
  APP=`basename $PWD`
  git stash
  GIT=`git pull`
  echo $GIT
  if [ "$FORCE" != "true" -a "$GIT" == "Already up to date." ]; then
    exit 0
  fi

  npm install --legacy-peer-deps
  npm run build
  if [ ! -d /var/www/html/$APP/ ]; then
    mkdir /var/www/html/$APP
  fi
  if [ -d /var/www/html/$APP/css ]; then
    rm /var/www/html/$APP/css/*
  else
    mkdir /var/www/html/$APP/css
  fi
  if [ -d /var/www/html/$APP/js ]; then
    rm /var/www/html/$APP/js/*
  else
    mkdir /var/www/html/$APP/js
  fi
  cp -R dist/* /var/www/html/$APP
  if [ -f "src/server.js" ]; then
    SERVER=`ps -ef | grep server.js | grep "/$APP/" | awk {'print $2'}`
    if [ "$SERVER" != "" ]; then
      kill -9 $SERVER
    fi
  fi
  rm -rf $DIR/node_modules/.cache
  rm -rf $DIR/dist
done

ps -ef | grep php | grep outdated
if [ $? -eq 1 ]; then
  php /usr/apps/monitor/src/lib/outdated.php &
fi
