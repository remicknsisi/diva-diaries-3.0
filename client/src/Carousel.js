// function Carousel() {
//     // We start out rendering the first slide. 0 denotes the index of the
//     // active item.
//     const [currentSlide, setCurrentSlide] = useState(0);
  
//     /**
//      * Handler function that transitions to the next slide in the carousel.
//      * This is the function that will be run once the user clicks the "next"
//      * button.
//      */
//     function goNext() {
//       setCurrentSlide(prevSlide => prevSlide + 1);
//     }
  
//     /**
//      * Equivalent to `goNext`. Handler function that will be invoked when clicking
//      * the "back" button.
//      */
//     function goBack() {
//       setCurrentSlide(prevSlide => prevSlide - 1);
//     }
  
//     return (
//       // JSX goes here
//     )
//   }

// // its best to use normal local state in a carousel component rather than the redux store!