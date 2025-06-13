import { motion } from 'framer-motion';

const ApartmentDetail = ({ apartment, onBack }) => (
  <motion.div initial="initial" animate="animate" exit="exit" className="mt-10 w-[1000px] mx-auto">
    <motion.button className="mb-4 text-blue-600 underline" onClick={onBack} whileHover={{ scale: 1.1 }}>
      ← Back to List
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
