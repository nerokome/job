import { motion } from 'framer-motion';

const FloorSelector = ({ tower, floors, onBack, onSelect }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div initial="initial" animate="animate" exit="exit" className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Select Floor in {tower}</h2>
        <motion.button onClick={onBack} className="text-sm text-blue-500 underline" whileHover={{ scale: 1.1 }}>
          ← Back
        </motion.button>
      </div>
      <motion.div className="grid grid-cols-3 gap-4">
        {floors.map((floor, i) => (
          <motion.div
            key={floor}
            className="bg-white p-4 rounded-lg shadow hover:bg-gray-200 cursor-pointer"
            onClick={() => onSelect(floor)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
            transition={{ delay: i * 0.04 }}
          >
            {floor}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FloorSelector;
