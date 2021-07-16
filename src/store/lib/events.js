
const events = [
  {
    title: 'Empire domination continues',
    request: 'The Emperor will visit the Dark Star to check construction status',
    requirements: 'Work! Work! Work!',
    background: 'ev-bg00.png'
  },
  {
    title: 'Attack from the Rebellion',
    request: 'Secret informative about an imminent attack to the Dark Star from the Rebellion',
    requirements: 'For any built exhausting tunnel, we need to protect the corridor with 10 laser towers. <br>30 points of effective Defence',
    background: 'ev-bg02.png'
  },
  {
    title: 'Destroy Kripsona',
    request: 'Identified the main command base of the Rebellion on the Kripsona moon',
    requirements: 'Hyperdrive and Planet destroyer should be fully in place.<br>P2Ds fully operative',
    background: 'ev-bg03.png'
  },
  {
    title: 'Attack the Rebellion convoy',
    request: 'Message interception confirms a large convoy of the Rebellion is moving into the sector of the Dark Star',
    requirements: 'All 3 space fighter squadrons available and all 3 landing bays with assigned tractor beams must be active.<br>30 points of effective Supremacy',
    background: 'ev-bg06.png'
  },
  {
    title: 'Antimatter reactor full test',
    request: 'The Emperor wants to verify the capacity of the Antimatter reactor of the Dark Star',
    requirements: 'Reactor with insulator and cooler with all 3 exhausting tunnels.<br>All 3 P2Ds fully active',
    background: 'ev-bg04.png'
  },
  {
    title: 'Imperial parade',
    request: 'The Governors of the Merchant guild will visit the Dark Star to meet the Emperor',
    requirements: 'One fighter and one bomber squadrons, Koenig’s shuttle and Throne room.<br>Facilities for Troopers (rooms, lavatories, …).<br>30 points of effective Supremacy',
    background: 'ev-bg05.png'
  },
  {
    title: 'Princess Azuna arrested',
    request: 'The leader of the Rebellion has been captured and will be taken in prison on the Dark Star',
    requirements: 'Prison block with at least 1 cell, torture room, balcony of terror and Throne room.<br>All lifts working to facilitate secure transport of the prisoner',
    background: 'ev-bg01.png'
  }
]

module.exports = {

  newEvents: function() {
    return events
  }
}
