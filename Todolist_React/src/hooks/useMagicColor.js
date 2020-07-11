import React, { useState, useEffect, useRef } from 'react'


function randomColor(currentColor) {
    let listColors = ['red', 'blue', 'orange', 'yellow', '#ffa900'];
    // random 0 ---> 4
    // Math.trunc ===> Lấy phần nguyên
    // Math.radom ===> Lấy 1 số từ 0--> bé hơn 1


    // Trả về vị trí index của màu cũ.
    const currentIndex = listColors.indexOf(currentColor);
    // Giả sử ban đầu ta gán chúng bằng nhau
    let newIndex = currentIndex;
    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 5)
        // Sau khi code trên chạy nếu giá trị newIndex mà khác với giá trị currentIndex thì nó sẽ return 
    }
    return listColors[newIndex];
}

export default function useMagicColor() {
    const [color, setcolor] = useState('black');
    const colorRef = useRef('transparent');
    useEffect(() => {
        // Change color every one second.
        const colorInterval = setInterval(() => {
            console.log('First Color ' + colorRef.current);
            const newColor = randomColor(colorRef.current);
            setcolor(newColor);
            colorRef.current = newColor;
        }, 1000);
        return () => {
            clearInterval(colorInterval);
        }
    }, [])
    return color;
}