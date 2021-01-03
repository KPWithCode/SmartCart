// framer motion variants
const itemVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1.2
        }
    },
    exit: {
        y: '-100vh',
        transition: {
            ease: 'easeOut',
            duration: 1
        }
    }
};

export default itemVariants;