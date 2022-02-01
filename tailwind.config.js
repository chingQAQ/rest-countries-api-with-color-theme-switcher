module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: '320px',
            md: '600px',
            lg: '1024px'
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '3rem'
            },
        },
        extend: {
            colors: {
                'dark-blue': 'hsl(209, 23%, 22%)',
                'very-dark-blue': 'hsl(207, 26%, 17%)'
            },
        }
    },
    plugins: []
};