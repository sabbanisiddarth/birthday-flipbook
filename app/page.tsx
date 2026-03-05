'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #fce7f3 0%, #f0f9ff 100%)',
      fontFamily: '"Playfair Display", serif',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '600px',
        }}
      >
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ec4899 0%, #06b6d4 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          🎂 Birthday Wishes
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: '#64748b',
          marginBottom: '2rem',
          fontFamily: 'system-ui, sans-serif',
        }}>
          A beautiful 3D flip-book experience coming soon...
        </p>
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, #fca5a5 0%, #fecdd3 100%)',
            borderRadius: '50%',
            margin: '2rem auto',
            boxShadow: '0 20px 50px rgba(236, 72, 153, 0.3)',
          }}
        />
        
        <p style={{
          fontSize: '1rem',
          color: '#94a3b8',
          marginTop: '2rem',
          fontFamily: 'system-ui, sans-serif',
        }}>
          Made with ✨ using Next.js, React, TypeScript, Tailwind CSS & Framer Motion
        </p>
      </motion.div>
    </main>
  );
}
