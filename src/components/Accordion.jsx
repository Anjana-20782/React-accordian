import { useState } from "react";
import "./Accordion.css"; // optional for styles

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggle}>
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Accordion() {
  return (
    <div className="accordion-container">
      <AccordionItem title="What are accordion components?">
        Accordion components are user interface elements used for organizing...
      </AccordionItem>

      <AccordionItem title="What are they used for?">
        They are commonly used in FAQ, menus, etc.
      </AccordionItem>

      <AccordionItem title="Accordion as a musical instrument">
        The accordion is a musical instrument with a keyboard and bellows...
      </AccordionItem>

      <AccordionItem title="Can I create an accordion with a different framework?">
        Yes of course! You can create it with any library/framework.
      </AccordionItem>
    </div>
  );
}
