import { motion, AnimatePresence } from "framer-motion";
import type { FC, ReactNode } from "react";
import { FiX } from "react-icons/fi";

interface CustomModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    title?: string;
    children: ReactNode;
    widthClass?: string; // optional for size control (e.g. "max-w-lg")
}

const Modal: FC<CustomModalProps> = ({
    isOpen,
    setIsOpen,
    title,
    children,
    widthClass = "",
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-white/50 backdrop-blur-sm flex justify-center items-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className={`bg-white/50  rounded-2xl shadow-xl w-full ${widthClass} mx-4 relative`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 p-4">
                            {title && (
                                <h2 className="text-lg font-semibold text-gray-800 ">
                                    {title}
                                </h2>
                            )}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition"
                            >
                                <FiX size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 overflow-y-auto max-h-[80vh]">{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
