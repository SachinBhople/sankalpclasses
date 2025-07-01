'use client';

export function GoogleMapEmbed() {
  return (
    // <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
    //   <iframe
    //     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.8567834567!2d75.1234567!3d19.8765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPhulambri%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
    //     width="100%"
    //     height="100%"
    //     style={{ border: 0 }}
    //     allowFullScreen
    //     loading="lazy"
    //     referrerPolicy="no-referrer-when-downgrade"
    //     title="Sankalp Classes Location"
    //   ></iframe>
    //   <iframe
    //     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1870.4611678207011!2d75.41708988619146!3d20.081286146293703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbbf3763251eb7%3A0x1d1c10cc479479b!2sCoaching%20classes!5e1!3m2!1sen!2sin!4v1751347390377!5m2!1sen!2sin"
    //     height="100%"
    //     style={{ border: 0 }}
    //     allowFullScreen
    //     loading="lazy"
    //     referrerPolicy="no-referrer-when-downgrade"
    //     title="Sankalp Classes Location"
    //   ></iframe>



    // </div>

    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1870.4611678207011!2d75.41708988619146!3d20.081286146293703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbbf3763251eb7%3A0x1d1c10cc479479b!2sCoaching%20classes!5e1!3m2!1sen!2sin!4v1751347390377!5m2!1sen!2sin"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sankalp Classes Location"
      ></iframe>
    </div>

  );
}