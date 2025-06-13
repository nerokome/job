import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tower = () => {
  const towers = ['Tower A', 'Tower B', 'Tower C'];
  const floors = Array.from({ length: 15 }, (_, i) => `Floor ${15 - i}`);
  const apartments = [
    {
      id: 1,
      image:"/public/emily.png",
      area: '1200 sqft',
      type: '2BHK',
      rooms: '2 Bed, 1 Kitchen',
    },
    {
      id: 2,
      image: "/public/envy.png",
      area: '1500 sqft',
      type: '3BHK',
      rooms: '3 Bed, 1 Kitchen',
    },
    {
      id: 3,
      image: "/public/outside.png",
      area: '900 sqft',
      type: '1BHK',
      rooms: '1 Bed, 1 Kitchen',
    },
    {
      id: 4,
      image: "/public/robert.png",
      area: '1100 sqft',
      type: '2BHK',
      rooms: '2 Bed, 1 Kitchen',
    },
  ];

  const [selectedTower, setTower] = useState(null);
  const [selectedFloor, setFloor] = useState(null);
  const [selectedApartment, setApartment] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const containerMotion = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.3 },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mini Real Estate Selector
      </motion.h1>

      
      <AnimatePresence>
        {!selectedTower && (
          <motion.div
            className="flex justify-center gap-6"
            {...containerMotion}
          >
            {towers.map((tower, index) => (
              <motion.div
                key={tower}
                className="p-6 w-40 text-center bg-blue-100 hover:bg-blue-300 rounded-lg shadow-xl cursor-pointer"
                onClick={() => setTower(tower)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-xl font-semibold">{tower}</h2>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {selectedTower && !selectedFloor && (
          <motion.div {...containerMotion} className="mt-10">
            <motion.div
              className="flex justify-between items-center mb-4"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold">Select Floor in {selectedTower}</h2>
              <motion.button
                onClick={() => setTower(null)}
                className="text-sm text-blue-500 underline"
                whileHover={{ scale: 1.1 }}
              >
                ← Back
              </motion.button>
            </motion.div>
            <motion.div className="grid grid-cols-3 gap-4">
              {floors.map((floor, i) => (
                <motion.div
                  key={floor}
                  className="bg-white p-4 rounded-lg shadow hover:bg-gray-200 cursor-pointer"
                  onClick={() => setFloor(floor)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial="initial"
                  animate="animate"
                  variants={fadeInUp}
                  transition={{ delay: i * 0.04 }}
                >
                  {floor}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {selectedFloor && !selectedApartment && (
          <motion.div {...containerMotion} className="mt-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Apartments on {selectedFloor}</h2>
              <motion.button
                onClick={() => setFloor(null)}
                className="text-sm text-blue-500 underline"
                whileHover={{ scale: 1.1 }}
              >
                ← Back
              </motion.button>
            </div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {apartments.map((apt, i) => (
                <motion.div
                  key={apt.id}
                  className="bg-white rounded-lg shadow relative overflow-hidden cursor-pointer group"
                  onClick={() => setApartment(apt)}
                  whileHover={{ scale: 1.03 }}
                  initial="initial"
                  animate="animate"
                  variants={fadeInUp}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.img
                    src={apt.image}
                    alt={apt.type}
                    className="w-full h-40 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="p-4 space-y-1">
                    <motion.p className="text-sm" variants={fadeIn}>
                      {apt.area}
                    </motion.p>
                    <motion.p className="font-semibold" variants={fadeIn}>
                      {apt.type}
                    </motion.p>
                    <motion.p className="text-gray-500 text-sm" variants={fadeIn}>
                      {apt.rooms}
                    </motion.p>
                  </div>
                  <motion.div
                    className="absolute  bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"
                    layout
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {selectedApartment && (
          <motion.div {...containerMotion} className="mt-10 w-[1000px] mx-auto">
            <motion.button
              className="mb-4 text-blue-600 underline"
              onClick={() => setApartment(null)}
              whileHover={{ scale: 1.1 }}
            >
              ← Back to List
            </motion.button>
            <motion.img
              src={selectedApartment.image}
              alt={selectedApartment.type}
              className="w-full rounded-lg shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <motion.div className="mt-4 space-y-2" initial="initial" animate="animate">
              <motion.p variants={fadeIn}><strong>Area:</strong> {selectedApartment.area}</motion.p>
              <motion.p variants={fadeIn}><strong>Unit Type:</strong> {selectedApartment.type}</motion.p>
              <motion.p variants={fadeIn}><strong>Rooms:</strong> {selectedApartment.rooms}</motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tower;
