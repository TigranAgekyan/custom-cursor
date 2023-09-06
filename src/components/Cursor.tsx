import React, { useEffect, useRef, useState } from 'react';

interface ICursor{
}

function Cursor ( props: ICursor ){

   //Reference to the cursor
   const cursorRef = useRef<HTMLDivElement>(null);

   //Position of the cursor
   const [position, setPosition] = useState({x: 0, y: 0});

   //State of whether the user's mouse if on the page or not
   const [onPage, setOnPage] = useState(true);

   //State of whether the user's mouse button is being pressed or not
   const [clicked, setClicked] = useState(false);

   //State of whether the user's mouse is hovering over a link or not
   const [linkHover, setLinkHover] = useState(false);

   //Load all event listeners on page load
   useEffect(() => {
      const addEventListeners = () => {

         //Listen to the movement of the mouse
         document.addEventListener("mousemove", mMove);

         //Listen to when the mouse enters the page from outside the window
         document.addEventListener("mouseenter", mEnter);

         //Listen to when the mouse leaves the page
         document.addEventListener("mouseleave", mLeave);

         //Listen to when the mouse button is being presses
         document.addEventListener("mousedown", mDown);
         
         //Listen to when the mouse button is released
         document.addEventListener("mouseup", mUp);

      }

      //remove all mouse listeners
      const removeEventListeners = () => {
         document.removeEventListener("mousemove", mMove);
         document.removeEventListener("mouseenter", mEnter);
         document.removeEventListener("mouseleave", mLeave);
         document.removeEventListener("mousedown", mDown);
         document.removeEventListener("mouseup", mUp);
      }

      //Listeners to track if user is hovering over a link ( <a></a> )
      const addLinkEvents = () => {
         document.querySelectorAll('a').forEach((el) => {
            el.addEventListener("mouseover", () => setLinkHover(true));
            el.addEventListener("mouseout", () => setLinkHover(false));
         })
      }

      //Update cursors position to current mouse position on the page
      const mMove = (el: MouseEvent) => {
         setPosition({x: el.clientX!, y:el.clientY!});
      }

      //Mouse enters the page
      const mEnter = () => {
         setOnPage(true);
      }

      //Mouse leaves the page
      const mLeave = () => {
         setOnPage(false);
      }

      //Mouse button is not pressed
      const mUp = () => {
         setClicked(false);
      }

      //Mouse button is pressed
      const mDown = () => {
         setClicked(true);
      }

      //Load Listeners
      addEventListeners();
      addLinkEvents();
      //Remove all listeners when page is changed?
      return () => removeEventListeners();

   }, []);

   return (
      <div className={'cursor' + (onPage ? '':' c--hidden') + (clicked ? ' c--clicked': '') + (linkHover ? ' c--link-hovered' : '')} ref={cursorRef} style={{left: position.x, top: position.y}}>
      </div>
   );
}

export default Cursor