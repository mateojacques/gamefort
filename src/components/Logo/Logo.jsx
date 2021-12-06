import { logoIcon, logoText } from "./logo.module.css";

const Logo = ({ showIcon }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      {showIcon ? (
        <svg
          className={logoIcon}
          width="62"
          height="62"
          viewBox="0 0 62 62"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24.9625 28.675H22.1875C21.925 28.675 21.725 28.875 21.725 29.1375V35.6C21.725 35.8625 21.925 36.0625 22.1875 36.0625H24.9625C25.225 36.0625 25.425 35.8625 25.425 35.6V29.1375C25.425 28.875 25.225 28.675 24.9625 28.675V28.675ZM39.7375 28.675H36.9625C36.7 28.675 36.5 28.875 36.5 29.1375V35.6C36.5 35.8625 36.7 36.0625 36.9625 36.0625H39.7375C40 36.0625 40.2 35.8625 40.2 35.6V29.1375C40.1875 28.875 39.9875 28.675 39.7375 28.675V28.675ZM56.2375 13.0375C55.95 12.6375 55.6625 12.2375 55.35 11.85C54.125 10.2875 52.75 8.85 51.25 7.55C50.6875 7.0625 50.1125 6.6 49.5125 6.15C49.3125 6 49.1125 5.8625 48.9125 5.7125C45.4625 3.2625 41.5 1.5 37.2125 0.625C35.1875 0.2125 33.1 0 30.9625 0C28.825 0 26.725 0.2125 24.7125 0.625C20.425 1.5125 16.4625 3.275 13.05 5.725C12.85 5.8625 12.65 6.0125 12.45 6.1625C11.85 6.6125 11.275 7.075 10.7125 7.5625C10.3375 7.8875 9.975 8.225 9.6125 8.5625C9.25 8.9 8.9 9.25 8.5625 9.6125C7.875 10.325 7.225 11.0875 6.6125 11.8625C6.3125 12.25 6.0125 12.65 5.725 13.05C2.1125 18.125 0 24.3125 0 31C0 31.25 0.0124999 31.5 0.0124999 31.75C0.0249999 31.8375 0.025 31.9125 0.025 32C0.0375 32.1625 0.0375 32.3375 0.05 32.5C0.05 32.6 0.0625 32.6875 0.0625 32.7875C0.0625 32.95 0.075 33.1 0.0875 33.25C0.1 33.35 0.1 33.45 0.1125 33.55C0.125 33.6875 0.1375 33.8375 0.15 33.9875C0.15 34.0875 0.1625 34.1875 0.175 34.2875C0.1875 34.4375 0.2125 34.5875 0.225 34.7375C0.2375 34.8375 0.25 34.925 0.2625 35.025C0.275 35.1875 0.3 35.35 0.325 35.5125C0.3375 35.5875 0.35 35.675 0.3625 35.75L0.475 36.4625C0.4875 36.5375 0.5 36.6 0.5125 36.675C0.55 36.8375 0.575 37.0125 0.6125 37.175C0.6375 37.275 0.65 37.375 0.675 37.475C0.7 37.6 0.7375 37.7375 0.7625 37.875C0.7875 37.9875 0.8125 38.0875 0.8375 38.2C0.8625 38.325 0.8875 38.45 0.925 38.575C0.95 38.6875 0.9875 38.8 1.0125 38.9125C1.05 39.0375 1.075 39.15 1.1125 39.275C1.15 39.3875 1.175 39.5 1.2125 39.6125C1.2375 39.725 1.275 39.85 1.3125 39.9625C1.35 40.075 1.375 40.1875 1.4125 40.3C1.45 40.425 1.4875 40.5375 1.525 40.65C1.6 40.85 1.6625 41.0625 1.7375 41.2625C1.7875 41.3875 1.825 41.5 1.8625 41.6125C1.9 41.7375 1.95 41.8625 2 41.9875C2.0375 42.0875 2.075 42.175 2.1125 42.275L2.2625 42.65C2.3 42.7375 2.3375 42.8375 2.375 42.925C2.425 43.05 2.4875 43.175 2.5375 43.3L2.65 43.5625C2.7125 43.6875 2.7625 43.8125 2.825 43.9375C2.8625 44.025 2.9 44.1 2.9375 44.1875C3 44.3125 3.0625 44.45 3.125 44.575C3.15 44.65 3.1875 44.7125 3.225 44.7875C3.3 44.925 3.3625 45.0625 3.4375 45.2C3.45 45.225 3.4625 45.2375 3.475 45.2625C3.75 45.775 4.025 46.2875 4.325 46.7875C4.35 46.8375 4.3875 46.8875 4.4125 46.9375C4.5 47.075 4.575 47.2125 4.6625 47.35C4.7 47.4125 4.7375 47.4625 4.775 47.525C4.85 47.6625 4.9375 47.7875 5.025 47.925C5.0625 47.9875 5.1 48.0375 5.1375 48.1C5.225 48.2375 5.3125 48.3625 5.4 48.5C5.425 48.55 5.4625 48.6 5.5 48.65C5.5875 48.7875 5.6875 48.925 5.7875 49.0625C5.8125 49.0875 5.825 49.125 5.85 49.15C10.5375 55.6125 17.65 60.2125 25.85 61.575C25.9625 61.5875 26.0625 61.6125 26.175 61.625C26.3 61.65 26.4375 61.675 26.5625 61.6875C26.6875 61.7 26.8 61.725 26.9125 61.7375C27.0375 61.7625 27.1625 61.775 27.2875 61.7875C27.4 61.8 27.525 61.8125 27.65 61.825C27.775 61.8375 27.8875 61.85 28.0125 61.8625C28.1375 61.875 28.275 61.8875 28.4 61.9C28.5125 61.9125 28.625 61.9125 28.7375 61.925C28.875 61.9375 29.025 61.9375 29.1625 61.95C29.2625 61.95 29.375 61.9625 29.475 61.9625C29.6375 61.9625 29.8 61.975 29.9625 61.975C30.05 61.9875 30.1375 61.9875 30.225 61.9875C30.475 62 30.725 62 30.975 62C31.225 62 31.475 61.9875 31.725 61.9875C31.8125 61.9875 31.9 61.975 31.9875 61.975C32.15 61.975 32.3125 61.975 32.475 61.9625C32.575 61.9625 32.6875 61.95 32.7875 61.95C32.925 61.9375 33.075 61.9375 33.2125 61.925C33.325 61.925 33.4375 61.9125 33.55 61.9C33.675 61.8875 33.8125 61.875 33.9375 61.8625C34.0625 61.85 34.175 61.8375 34.3 61.825C34.4125 61.8125 34.5375 61.8 34.6625 61.7875C34.7875 61.775 34.9125 61.75 35.0375 61.7375C35.1625 61.725 35.275 61.7 35.3875 61.6875C35.5125 61.6625 35.65 61.65 35.775 61.625C35.8875 61.6125 35.9875 61.5875 36.1 61.575C44.3 60.2 51.4125 55.6125 56.1125 48.775C56.1375 48.75 56.15 48.7125 56.175 48.6875C56.275 48.55 56.3625 48.4125 56.4625 48.275C56.4875 48.225 56.525 48.175 56.5625 48.125C56.65 47.9875 56.7375 47.8625 56.825 47.725C56.8625 47.6625 56.9 47.6125 56.9375 47.55C57.0125 47.4125 57.1 47.2875 57.1875 47.15C57.225 47.0875 57.2625 47.0375 57.3 46.975C57.3875 46.8375 57.4625 46.7 57.55 46.5625C57.575 46.5125 57.6125 46.4625 57.6375 46.4125C57.9375 45.9125 58.2125 45.4 58.4875 44.8875C58.5 44.8625 58.5125 44.85 58.525 44.825C58.6 44.6875 58.6625 44.55 58.7375 44.4125C58.7625 44.3375 58.8 44.275 58.8375 44.2C58.9 44.075 58.9625 43.9375 59.025 43.8125C59.0625 43.725 59.1 43.65 59.1375 43.5625C59.2 43.4375 59.2625 43.3125 59.3125 43.1875L59.425 42.925C59.4875 42.8 59.5375 42.675 59.5875 42.55C59.625 42.4625 59.6625 42.3625 59.7 42.275L59.85 41.9C59.8875 41.8 59.925 41.7125 59.9625 41.6125C60.0125 41.4875 60.05 41.3625 60.1 41.2375C60.15 41.1125 60.1875 41 60.225 40.8875C60.3 40.6875 60.375 40.475 60.4375 40.275C60.475 40.15 60.5125 40.0375 60.55 39.925C60.5875 39.8125 60.6125 39.7 60.65 39.5875C60.675 39.475 60.7125 39.35 60.75 39.2375C60.7875 39.125 60.825 39.0125 60.85 38.9C60.8875 38.775 60.9125 38.6625 60.95 38.5375C60.975 38.425 61.0125 38.3125 61.0375 38.2C61.0625 38.075 61.1 37.95 61.125 37.825C61.15 37.7125 61.175 37.6125 61.2 37.5C61.225 37.375 61.2625 37.2375 61.2875 37.1C61.3125 37 61.325 36.9 61.35 36.8C61.3875 36.6375 61.425 36.4625 61.45 36.3C61.4625 36.225 61.475 36.1625 61.4875 36.0875L61.6 35.375C61.6125 35.3 61.625 35.2125 61.6375 35.1375C61.65 34.975 61.675 34.8125 61.7 34.65C61.7125 34.55 61.725 34.4625 61.7375 34.3625C61.75 34.2125 61.775 34.0625 61.7875 33.9125C61.7875 33.8125 61.8 33.7125 61.8125 33.6125C61.825 33.475 61.8375 33.325 61.85 33.175C61.8625 33.075 61.8625 32.975 61.875 32.875C61.8875 33.0875 61.8875 32.9375 61.9 32.7875C61.9 32.6875 61.9125 32.6 61.9125 32.5C61.925 32.3375 61.9375 32.1625 61.9375 32C61.95 31.9125 61.95 31.8375 61.95 31.75C61.9625 31.5 61.9625 31.25 61.9625 31C61.9625 24.3125 59.85 18.125 56.2375 13.0375ZM54.9625 45.4375C53.7875 47.375 52.3875 49.175 50.7625 50.8C48.1875 53.375 45.2 55.3875 41.8625 56.8C40.125 57.525 38.3375 58.0875 36.5 58.45V48.975C36.5 41.65 25.425 41.65 25.425 48.975V58.45C23.5875 58.0875 21.8 57.5375 20.0625 56.8C16.725 55.3875 13.7375 53.375 11.1625 50.8C9.5375 49.175 8.1375 47.375 6.9625 45.4375V36.525C6.9625 36.2625 7.1625 36.0625 7.425 36.0625H10.1875C10.45 36.0625 10.65 36.2625 10.65 36.525V39.75H14.35V21.75C14.35 21.4875 14.55 21.2875 14.8125 21.2875H17.575C17.8375 21.2875 18.0375 21.4875 18.0375 21.75V24.9875H21.725V21.75C21.725 21.4875 21.925 21.2875 22.1875 21.2875H24.9625C25.225 21.2875 25.425 21.4875 25.425 21.75V24.9875H29.1125V21.75C29.1125 21.15 29.925 21.2875 30.3 21.2875V10.0125C29.75 9.7625 29.375 9.175 29.375 8.575C29.375 6.475 32.55 6.475 32.55 8.575C32.55 9.175 32.175 9.75 31.625 10.0125V10.5C32.4125 10.325 33.2125 10.2125 34.025 10.2125C35.2 10.2125 36.325 10.65 37.3125 10.65C38.2125 10.65 39.2125 10.2125 39.7375 10.2125C40 10.2125 40.2 10.4125 40.2 10.675V16.725C40.2 17.425 37.8625 17.5375 37.4 17.5375C36.325 17.5375 35.325 17.1 34.225 17.1C33.35 17.1 32.4625 17.25 31.625 17.45V21.2875C32 21.2875 32.8125 21.15 32.8125 21.75V24.9875H36.5V21.75C36.5 21.4875 36.7 21.2875 36.9625 21.2875H39.7375C40 21.2875 40.2 21.4875 40.2 21.75V24.9875H43.8875V21.75C43.8875 21.4875 44.0875 21.2875 44.35 21.2875H47.1125C47.375 21.2875 47.575 21.4875 47.575 21.75V39.75H51.2625V36.525C51.2625 36.2625 51.4625 36.0625 51.725 36.0625H54.5C54.7625 36.0625 54.9625 36.2625 54.9625 36.525V45.4375Z" />
        </svg>
      ) : (
        <></>
      )}

      <svg
        className={logoText}
        width="140"
        height="28"
        viewBox="0 0 140 28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.85 20.8C8.91 21.2 7.21 21.4 5.75 21.4H4.7C3.34 21.4 2.25 20.99 1.43 20.17C0.61 19.35 0.2 18.26 0.2 16.9V10.9C0.2 9.4 0.62 8.23 1.46 7.39C2.32 6.53 3.5 6.1 5 6.1H16.1V22.9C16.1 24.26 15.69 25.35 14.87 26.17C14.05 26.99 12.96 27.4 11.6 27.4C8.46 27.4 4.96 27.2 1.1 26.8V22.9C4.92 23.2 7.82 23.35 9.8 23.35C10.1 23.35 10.35 23.25 10.55 23.05C10.75 22.85 10.85 22.6 10.85 22.3V20.8ZM7.25 17.35C8.51 17.35 9.71 17.25 10.85 17.05V10.15H6.65C5.85 10.15 5.45 10.55 5.45 11.35V16.3C5.45 16.6 5.55 16.85 5.75 17.05C5.95 17.25 6.2 17.35 6.5 17.35H7.25ZM25.4035 18.1C26.4635 18.1 27.6635 17.9 29.0035 17.5V15.7H24.6535C24.3535 15.7 24.1035 15.8 23.9035 16C23.7035 16.2 23.6035 16.45 23.6035 16.75V17.05C23.6035 17.35 23.7035 17.6 23.9035 17.8C24.1035 18 24.3535 18.1 24.6535 18.1H25.4035ZM19.8535 6.4C23.5135 6 26.8135 5.8 29.7535 5.8C31.1135 5.8 32.2035 6.21 33.0235 7.03C33.8435 7.85 34.2535 8.94 34.2535 10.3V22H29.6035L29.3035 20.5C28.3635 21.12 27.3935 21.58 26.3935 21.88C25.4135 22.16 24.5835 22.3 23.9035 22.3H22.8535C21.4935 22.3 20.4035 21.89 19.5835 21.07C18.7635 20.25 18.3535 19.16 18.3535 17.8V16.45C18.3535 15.09 18.7635 14 19.5835 13.18C20.4035 12.36 21.4935 11.95 22.8535 11.95H29.0035V10.75C29.0035 10.45 28.9035 10.2 28.7035 10C28.5035 9.8 28.2535 9.7 27.9535 9.7C26.6535 9.7 25.2135 9.76 23.6335 9.88C22.0735 10 20.8135 10.09 19.8535 10.15V6.4ZM47.5953 5.8C49.2153 5.8 50.4653 6.4 51.3453 7.6C52.2653 6.98 53.2553 6.53 54.3153 6.25C55.3953 5.95 56.3553 5.8 57.1953 5.8H57.4953C58.8553 5.8 59.9453 6.21 60.7653 7.03C61.5853 7.85 61.9953 8.94 61.9953 10.3V22H56.7453V11.2C56.7453 10.9 56.6453 10.65 56.4453 10.45C56.2453 10.25 55.9953 10.15 55.6953 10.15H55.5453C54.6453 10.15 53.4953 10.35 52.0953 10.75V22H46.8453V11.2C46.8453 10.9 46.7453 10.65 46.5453 10.45C46.3453 10.25 46.0953 10.15 45.7953 10.15H45.6453C44.7453 10.15 43.5953 10.35 42.1953 10.75V22H36.9453V6.1H41.5953L41.8953 7.6C42.8353 6.98 43.7953 6.53 44.7753 6.25C45.7753 5.95 46.6153 5.8 47.2953 5.8H47.5953ZM70.8395 9.55C70.0395 9.55 69.6395 9.95 69.6395 10.75V12.4H74.7395V10.75C74.7395 9.95 74.3395 9.55 73.5395 9.55H70.8395ZM79.3895 21.7C75.5295 22.1 72.0295 22.3 68.8895 22.3C67.5295 22.3 66.4395 21.89 65.6195 21.07C64.7995 20.25 64.3895 19.16 64.3895 17.8V10.6C64.3895 9.1 64.8095 7.93 65.6495 7.09C66.5095 6.23 67.6895 5.8 69.1895 5.8H75.1895C76.6895 5.8 77.8595 6.23 78.6995 7.09C79.5595 7.93 79.9895 9.1 79.9895 10.6V16.15H69.6395V17.35C69.6395 17.65 69.7395 17.9 69.9395 18.1C70.1395 18.3 70.3895 18.4 70.6895 18.4C72.6695 18.4 75.5695 18.25 79.3895 17.95V21.7ZM95.5777 5.05C94.9977 5.01 94.2277 4.95 93.2677 4.87C92.3077 4.79 91.4777 4.75 90.7777 4.75C90.0777 4.75 89.6277 4.85 89.4277 5.05C89.2277 5.25 89.1277 5.5 89.1277 5.8V7.3H94.0777V11.35H89.1277V22H83.8777V11.35H81.7777V7.3H83.8777V5.2C83.8777 3.84 84.2877 2.75 85.1077 1.93C85.9277 1.11 87.0177 0.699999 88.3777 0.699999C89.5977 0.699999 90.8877 0.739999 92.2477 0.819999C93.6077 0.899999 94.7177 0.959999 95.5777 0.999999V5.05ZM112.384 17.5C112.384 19 111.954 20.18 111.094 21.04C110.254 21.88 109.084 22.3 107.584 22.3H100.684C99.1836 22.3 98.0036 21.88 97.1436 21.04C96.3036 20.18 95.8836 19 95.8836 17.5V10.6C95.8836 9.1 96.3036 7.93 97.1436 7.09C98.0036 6.23 99.1836 5.8 100.684 5.8H107.584C109.084 5.8 110.254 6.23 111.094 7.09C111.954 7.93 112.384 9.1 112.384 10.6V17.5ZM107.134 11.05C107.134 10.25 106.734 9.85 105.934 9.85H102.334C101.534 9.85 101.134 10.25 101.134 11.05V17.05C101.134 17.85 101.534 18.25 102.334 18.25H105.934C106.734 18.25 107.134 17.85 107.134 17.05V11.05ZM124.23 10.45C122.97 10.45 121.67 10.75 120.33 11.35V22H115.08V6.1H119.73L120.03 8.05C121.75 6.55 123.55 5.8 125.43 5.8H126.78V10.45H124.23ZM139.979 22C138.039 22.2 136.139 22.3 134.279 22.3C132.919 22.3 131.829 21.89 131.009 21.07C130.189 20.25 129.779 19.16 129.779 17.8V10.15H127.979V6.1H129.779L130.379 2.5H135.029V6.1H138.779V10.15H135.029V17.05C135.029 17.35 135.129 17.6 135.329 17.8C135.529 18 135.779 18.1 136.079 18.1H139.979V22Z" />
      </svg>
    </div>
  );
};

export default Logo;
