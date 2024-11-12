import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const CardService = ({ icon: Icon, title, content }) => (
  <Card
    bordered={false}
    className="w-full min-h-[215px] bg-laranja rounded-[20px] text-center px-5 py-10 font-poppins text-[#8d0808e4] shadow-2xl hover:scale-[102%] duration-500"
  >
    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-[#ff5e41d4] shadow-lg rounded-full flex justify-center items-center z-[3]">
      {Icon}
    </div>
    <div className="pt-4 z-[3]">
      <h3 className="text-center text-[20px] lg:text-[22px] font-semibold overflow-hidden break-words whitespace-normal tracking-wide">
        {title}
      </h3>
    </div>
    <div className="mt-5 overflow-hidden break-words whitespace-normal text-[#8d0808b1] text-[12.5px] lg:text-[14px] z-[3]">
      {content}
    </div>
  </Card>
);

CardService.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
};

export default CardService;
