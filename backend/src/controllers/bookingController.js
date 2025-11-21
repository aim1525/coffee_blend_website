const Booking = require('../models/bookingModel');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { firstName, lastName, date, time, phone, message } = req.body;

    if (!firstName || !lastName || !date || !time || !phone) {
      return res.status(400).json({ message: 'All required fields must be filled.' });
    }

    const newBooking = new Booking({ firstName, lastName, date, time, phone, message });
    await newBooking.save();

    res.status(201).json({ message: 'Table booked successfully!', booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all bookings (optional for admin)
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
