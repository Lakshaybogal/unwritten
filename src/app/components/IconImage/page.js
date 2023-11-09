import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcon1, faIcon2, faIcon3, /* Add more icons */ } from '@fortawesome/free-solid-svg-icons';

const YourComponent = () => {
  return (
    <div className="relative">
      <Image
        src="/profile.jpeg"
        width={200}
        height={200}
        className="mx-auto mt-10 shadow"
      />

      {/* Icon 1 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <FontAwesomeIcon icon={faIcon1} className="text-white bg-blue-500 p-2 rounded-full" />
      </div>

      {/* Icon 2 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <FontAwesomeIcon icon={faIcon2} className="text-white bg-green-500 p-2 rounded-full" />
      </div>

      {/* Icon 3 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <FontAwesomeIcon icon={faIcon3} className="text-white bg-red-500 p-2 rounded-full" />
      </div>

      {/* Add more icons with similar absolute positioning */}
    </div>
  );
};

export default YourComponent;
