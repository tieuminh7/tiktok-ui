import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/99095e17a41c7bb3ea3bd5cb262b0938.jpeg?lk3s=a5d48078&nonce=50397&refresh_token=1a793afc88f99b931e2d12fe65a9e389&x-expires=1723791600&x-signature=%2FuFdXcVDg81%2FUpGvURjYB7q5UJY%3D&shp=a5d48078&shcp=81f88b70"
        alt="hoa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span> Hoa</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>@hoa</span>
      </div>
    </div>
  );
}

export default AccountItem;
