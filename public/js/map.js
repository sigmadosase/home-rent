
	mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style:"mapbox://style/mapbox/streets-v12",
        center:listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });
       


    const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `
      <div style="font-family: Arial, sans-serif; max-width: 280px; line-height: 1.4;">
        <h4 style="margin: 0 0 6px 0; color: #2c3e50; font-weight: 700; font-size: 18px;">
          ${listing.title}
        </h4>
        <h6 style="margin: 0 0 8px 0; color: #7f8c8d; font-weight: 500; font-size: 14px;">
          ${listing.location}
        </h6>
        <p style="margin: 0; font-size: 13px; color: #34495e;">
          Exact location provided after booking
        </p>
      </div>
      `
    )
  )
  .addTo(map);
