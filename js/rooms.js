const rooms = [
    {
      name: "Standard Room",
      price: 1000,
      description: "A cozy room with basic amenities",
      beds: 1,
      image: "https://www.peacehotel.com.ph/wp-content/uploads/2012/07/standard_room1.jpg",
      benefits: ["Free Wi-Fi", "Complimentary breakfast"],
      amenities: ["TV", "Air conditioning", "Mini fridge", "En-suite bathroom"],
      bookings: [
        '2024-03-05',
        '2024-03-08',
        '2024-03-22'
      ]
    },
    {
      name: "Deluxe Room",
      price: 150000,
      description: "A spacious room with additional amenities",
      beds: 2,
      image: "https://www.peninsula.com/en/-/media/pbk/rooms/deluxe-room-twin-bed.jpg?mw=905&hash=9515693D3D8455DE1F48031E23A9C6BA",
      benefits: ["Free Wi-Fi", "Complimentary breakfast", "Private balcony"],
      amenities: ["TV", "Air conditioning", "Mini fridge", "En-suite bathroom", "Bathtub"],
      bookings: [
        '2024-03-05',
        '2024-03-08',
        '2024-03-22'
      ]
  
    },
    {
      name: "Suite",
      price: 250000,
      description: "A luxurious suite with a separate living area",
      beds: 1,
      image: "https://media-cdn.tripadvisor.com/media/photo-s/22/ac/7b/b8/the-amayaa.jpg",
      benefits: ["Free Wi-Fi", "Complimentary breakfast", "Private balcony", "Access to executive lounge"],
      amenities: ["TV", "Air conditioning", "Mini fridge", "En-suite bathroom", "Bathtub", "Sofa"],
      bookings: [
        '2024-03-05',
        '2024-03-08',
        '2024-03-22'
      ]
  
    },
    {
      name: "Family Room",
      price: 200000,
      description: "A room suitable for families with multiple beds",
      beds: 3,
      image: "https://stg-ninongs.pixel8.ph/wp-content/uploads/2018/08/Family-Room-3.jpg",
      benefits: ["Free Wi-Fi", "Complimentary breakfast", "Kids play area"],
      amenities: ["TV", "Air conditioning", "Mini fridge", "En-suite bathroom", "Bunk beds"],
      bookings: [
        '2024-03-05',
        '2024-03-08',
        '2024-03-22'
      ]
  
    },
    {
      name: "Penthouse",
      price: 5000008,
      description: "The ultimate luxury experience with stunning views",
      beds: 2,
      image: "https://www.palms.com/sites/default/files/styles/coh_x_large/public/2023-05/Palms_33205DoubleDouble_v3.jpg?itok=HvgGdUsy",
      benefits: ["Free Wi-Fi", "Complimentary breakfast", "Jacuzzi", "Champagne on arrival"],
      amenities: ["TV", "Air conditioning", "Mini fridge", "En-suite bathroom", "Jacuzzi"],
      bookings: [
        '2024-03-05',
        '2024-03-08',
        '2024-03-22'
      ]
  
    },
    {
      name: "Beachfront Villa",
      price: 100000,
      description: "A private villa with direct access to the beach",
      beds: 4,
      image: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/67759503-e01d2232baa5400a3e71338f1988787d.jpeg?_src=imagekit&tr=c-at_max,h-280,q-40,w-740",
      benefits: ["Free Wi-Fi", "Complimentary breakfast", "Private elevator access"],
      amenities: ["TV", "Air conditioning", "Mini fridge", "En-suite bathroom", "Panoramic windows", "Private terrace"],
      bookings: [
        '2024-03-05',
        '2024-03-08',
        '2024-03-22'
      ]
  
    },
    {
      name: "Cabin Retreat",
      price: 8000,
      description: "A rustic cabin surrounded by nature",
      beds: 1,
      image: "https://img.freepik.com/premium-photo/hotel-room-concept-back-nature-warm-colors_152904-14467.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700352000&semt=ais",
      benefits: [ "Complimentary breakfast"],
      amenities: ["Air conditioning", "Mini fridge", "En-suite bathroom"],
      bookings: [
        '2024-03-05',
        '2024-03-08',
        '2024-03-22'
      ]
  
    },
    {
      name: "Urban Loft",
      price: 18000,
      description: "A modern loft with an industrial vibe",
      beds: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpvujeSQjE0G-xFEZlE7cQfM_zmkViXSs7w&usqp=CAU",
      benefits: ["Free Wi-Fi", "Complimentary breakfast", "Kitchenette"],
      amenities: ["TV", "Air conditioning", "Kitchenette", "En-suite bathroom"],
      bookings: [
        '2024-03-05',
        '2024-03-08',
        '2024-03-22'
      ]
  
    },
    {
      name: "Mountain Chalet",
      price: 30000,
      description: "A cozy chalet nestled in the mountains",
      beds: 3,
      image: "https://res.cloudinary.com/tapioca/image/upload/dpr_auto,q_auto,f_auto,e_sharpen:40,ar_16:9,c_fill,w_820/v457/avs/cbeds-lodge/caven_101209_3142~~5de85987e0f71",
      benefits: ["Free Wi-Fi"],
      amenities: ["TV", "Fan", "Shared bathroom"],
      bookings: [
        '2024-03-05',
        '2024-03-08',
        '2024-03-22'
      ]
   
    },
    {
      name: "Riverside Cottage",
      price: 12000,
      description: "A charming cottage by the riverside",
      beds: 1,
      image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/47501830.jpg?k=3e7257157e786bb1c86c7b591910bae7e7d46a03f27c8d88b2ed3b0898a81bc2&o=",
      benefits: ["Free Wi-Fi", "Complimentary breakfast", "Private pool", "Personal chef"],
      amenities: ["TV", "Air conditioning", "Mini fridge", "En-suite bathroom"],
      bookings: [
        '2024-03-05',
        '2024-03-08',
        '2024-03-22'
      ]
  
    }
  ];

$(document).ready(function() {
    var roomDisplay = $('#roomList');
    for (var i = 0; i < 3; i++) {
      room = rooms[i];
      var roomHtml = `
        <div class="mb-4">
          <div class="card col-md-5 mx-5">
          <img src="${room.image}" alt="${room.name} Room Image" height=200 width="auto"/>
            <div class="card-body">
              <h5 class="card-title">${room.name}</h5>
              <p class="card-text">Description: ${room.description}</p>
              <p class="card-text">Beds: ${room.beds}</p>
              <p class="card-text">₱ ${room.price}</p>
              <a href="#" class="btn btn-primary">Book Now!</a>
            </div>
          </div>
        </div>
      `;
      roomDisplay.append(roomHtml);
    }
  });

  $(document).ready(function() {
    var roomDisplay = $('#listRoom');
    for (var i = 0; i < 10; i++) {
      room = rooms[i];
      var roomHtml = `
        <div class="mb-4">
          <div class="card col-md-5 mx-5">
          <img src="${room.image}" alt="${room.name} Room Image" height=200 width="auto"/>
            <div class="card-body">
              <h5 class="card-title">${room.name}</h5>
              <p class="card-text">Description: ${room.description}</p>
              <p class="card-text">Beds: ${room.beds}</p>
              <p class="card-text">₱ ${room.price}</p>
              <a href="#" class="btn btn-primary">Book Now!</a>
            </div>
          </div>
        </div>
      `;
      roomDisplay.append(roomHtml);
    }
  });

  function displayAvailableRooms() {
    const checkinDate = new Date($('#checkin').val());
    const checkoutDate = new Date($('#checkout').val());
    
    const availableRooms = rooms.filter(room => {
      const availableDates = room.bookings.map(dateStr => new Date(dateStr));
      for (let date = checkinDate; date <= checkoutDate; date.setDate(date.getDate() + 1)) {
        if (!availableDates.find(availableDate => availableDate.getTime() === date.getTime())) {
          return false;
        }
      }
      return true;
    });

    const roomList = $('#roomList');
    roomList.empty();
    if (availableRooms.length === 0) {
      roomList.append('<h1 class="fs-1 text-center my-5 py-5">No Available rooms on selected dates</h1>');
    } else {
      availableRooms.forEach(room => {
        roomList.append(`<        <div class="mb-4">
        <div class="card col-md-5 mx-5">
        <img src="${room.image}" alt="${room.name} Room Image" height=200 width="auto"/>
          <div class="card-body">
            <h5 class="card-title">${room.name}</h5>
            <p class="card-text">Description: ${room.description}</p>
            <p class="card-text">Beds: ${room.beds}</p>
            <p class="card-text">₱ ${room.price}</p>
            <a href="#" class="btn btn-primary">Book Now!</a>
          </div>
        </div>
      </div>`);
      });
    }
  }

  $(document).ready(function() {
    $('#checkin, #checkout').datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      startDate: new Date(),
    });

    displayAvailableRooms();

    $('#filterBtn').click(function() {
      displayAvailableRooms();
    });
  });

  