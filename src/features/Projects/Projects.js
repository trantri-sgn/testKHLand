import { useState } from "react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Dự án phân phối",
    title: "LUMIERE RIVERSIDE",
    image:
      "https://cdnkhaihoanland.com/web/thump/W1024H681-e5581525-ee0d-4aa6-a7c0-e5a165f8d832.jpg?v=0.3",
    quote:
      "Dự án Masteri Lumiere Riverside nằm ngay mặt tiền Xa lộ Hà Nội, phường An Phú, Quận 2. Dự án nằm liền kề hai “đàn anh” của mình là Khu căn hộ Masteri An Phú và Masteri Thảo Điền.",
  },
  {
    name: "Dự án đầu tư",
    title: "LA PARTENZA",
    image:
      "https://cdnkhaihoanland.com/web/thump/W1024H576-9479da51-ba49-403a-bdac-97c985051e40.jpg?v=0.3",
    quote:
      "Thừa hưởng tiềm năng phát triển bậc nhất của Nam Sài Gòn, La Partenza kiến tạo giá trị sống bền vững với không gian xanh nghỉ dưỡng chuẩn resort. Dự án hứa hẹn mang đến cơ hội an cư tuyệt vời, đồng thời là lựa chọn đầy cuốn hút dành cho các nhà đầu tư thô.",
  },
  {
    name: "Dự án phân phối",
    title: "THE 9 STELLARS",
    image:
      "https://cdnkhaihoanland.com/web/thump/W1024H576-6689800c-c8bb-458e-a9a0-938af2901a84.jpg?v=0.3",
    quote:
      "Sở hữu vị trí độc tôn ngay mặt tiền đường Hoàng Hữu Nam – giữa lòng TP. Thủ Đức, The 9 Stellars giúp cho mọi hành trình của quý cư dân trở nên thuận tiện hơn bao giờ hết:",
  },
];

const Projects = () => {
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });
  return (
    <div className="projects-section">
      <div className="projects-container">
        <div className="inner">
          <div className="projects-image slide-right">
            <ul>
              <li className={state.isActive1 ? "active" : ""}>
                <img
                  className="test"
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                />
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img src={testimonials[1].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <img src={testimonials[2].image} alt={testimonials[0].name} />
              </li>
            </ul>
          </div>
          <div className="project-content slide-left">
            <div className="box_text text-left height">
              <h3 className="box_text-description">Dự án bất động sản</h3>
              <h2 className="box_text-title">{testimonials[0].title}</h2>
              <div className="underline"></div>
              <p>{testimonials[0].quote}</p>
              <Link className="view-more">Xem chi tiết</Link>
            </div>
            <div>
              <div
                className="arrows left"
                onClick={() => console.log("ddd")}
              ></div>
              <div className="arrows right"></div>
              <Link className="view-all">xem thêm</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
