import { motion } from 'framer-motion';
import { RxExit } from "react-icons/rx";

const ApartmentDetail = ({ apartment, onBack }) => (
  <motion.div initial="initial" animate="animate" exit="exit" className="mt-10 w-[1000px] mx-auto">
    <motion.button className="mb-4 text-red-400 underline" onClick={onBack} whileHover={{ scale: 1.1 }}>
     <button className='flex gap-2  bg-gray-300  border border-transparent rounded-lg py-2 px-5 shadow-sm shadow-gray-700/50'>
                          <RxExit size={20} color='red' />
                         <h1>Back to list</h1>
                       </button>
    </motion.button>
    <motion.img
      src={apartment.image}
      alt={apartment.type}
      className="w-full rounded-lg shadow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
    <motion.div className="mt-4 space-y-2">
      <p><strong>Area:</strong> {apartment.area}</p>
      <p><strong>Unit Type:</strong> {apartment.type}</p>
      <p><strong>Rooms:</strong> {apartment.rooms}</p>
    </motion.div>
  </motion.div>
);

export default ApartmentDetail;
