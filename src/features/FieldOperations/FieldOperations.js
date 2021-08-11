import { Link } from "react-router-dom";

const FieldOperations = () => {
  return (
    <div className="field-section">
      <div className="box_field slide-right ">
        <div className="scale-img">
          <Link>
            <div className="box_field-img img1"></div>
          </Link>
        </div>
        <div className="box_text text-left">
          <div className="underline">
            <h2 className="box_text-title">Đầu tư phát triển</h2>
            <h3 className="box_text-description">Dự án bất động sản</h3>
          </div>
          <p>
            Sở hữu quỹ đất dồi dào cùng nguồn tài chính ổn định, Khải Hoàn Land
            mong muốn đầu tư phát triển các dự án chất lượng với mục tiêu nâng
            tầm giá trị sống cho cộng đồng, góp phần thay đổi tích cực diện mạo
            thị trường bất động sản trong nước.{" "}
          </p>
        </div>
      </div>
      <div className="box_field slide-left ">
        <div className="pic-order scale-img">
          <Link>
            <div className="box_field-img img2"></div>
          </Link>
        </div>
        <div className="box_text text-right">
          <h2 className="box_text-title">Hợp tác phân phối</h2>
          <h3 className="box_text-description">Dự án bất động sản</h3>
          <div className="underline"></div>
          <p>
            Với uy tín bền vững trên thị trường, Khải Hoàn Land hiện là đối tác
            phân phối chiến lược của gần 100 Chủ đầu tư danh tiếng trong và
            ngoài nước. Từ đó, Khải Hoàn Land cam kết đem đến cho khách hàng
            nhiều lựa chọn với kho dự án đa dạng và chất lượng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FieldOperations;
