import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '1234567890'; // replace with your WhatsApp number (no + or spaces)
  const message = 'Hello! I need help with your limo service.';

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp size={36} /> {/* Increased from 28 to 36 */}
    </a>
  );
};

export default WhatsAppButton;