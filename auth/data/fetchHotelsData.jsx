import { db } from '../../config/firebase'

function fetchHotelData(city) {
    const docRef = db.collection('cities').add(
        {
            city: city,
            resourtName: "Blank",
            numberOfRooms: '2',
            numberOfBeds: '4',
            roomService: true,
            miniBar: true,
            wifi: true,
        }
    );

}

export default fetchHotelData