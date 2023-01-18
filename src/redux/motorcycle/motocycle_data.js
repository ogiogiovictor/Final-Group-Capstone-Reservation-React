const url = 'http://localhost:3000/api/v1/cars';

// Async Slice Message Data
const fetchMotocycle = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const fetchData = data.data.map((m) => ({
    id: m.id,
    brand: m.brand,
    model: m.model,
    release_year: m.release_year,
    color: m.color,
    image_path: m.image_path,
    transmission: m.transmission,
    seats: m.seats,
    wheel_drive: m.wheel_drive,
    price: m.price
  }));

  return fetchData;
};

export default fetchMotocycle;