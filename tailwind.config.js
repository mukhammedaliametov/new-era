/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                2: "2px",
                4: "4px",
                6: "6px",
                8: "8px",
                10: "10px",
                12: "12px",
                13: "13px",
                14: "14px",
                16: "16px",
                18: "18px",
                20: "20px",
                22: "22px",
                24: "24px",
                26: "26px",
                28: "28px",
                30: "30px",
                32: "32px",
                36: "36px",
                40: "40px",
                42: "42px",
                44: "44px",
                48: "48px",
                50: "50px",
                52: "52px",
                54: "54px",
                62: "62px",
                64: "64px",
                80: "80px",
                92: "92px",
            },
            colors: {
                primary: "#ffc700",
                second: "#000124",
            },
            fontFamily: {
                display: ["Gilroy"],
                body: ["Montserrat"],
            },
            fontSize: {
                base: ['16px', '20px']
            }
        },
    },
    plugins: [],
};
