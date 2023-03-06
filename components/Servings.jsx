export default function Servings({ servs }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.20469 5.04062C3.20487 4.17154 3.4297 3.31726 3.85737 2.56069C4.28504 1.80412 4.90102 1.17095 5.64553 0.722625C6.39004 0.274298 7.23781 0.0260383 8.10655 0.00193909C8.97529 -0.0221601 9.83552 0.178719 10.6037 0.585083C11.372 0.991448 12.0221 1.5895 12.491 2.32119C12.96 3.05289 13.2318 3.89339 13.2802 4.76112C13.3286 5.62885 13.1518 6.49435 12.7671 7.27362C12.3823 8.0529 11.8027 8.71949 11.0844 9.2087C12.6312 9.77606 13.9729 10.7934 14.9368 12.1297C15.9006 13.466 16.4425 15.0602 16.4927 16.707C16.4906 16.8846 16.4199 17.0545 16.2955 17.1811C16.171 17.3078 16.0025 17.3815 15.825 17.3869C15.6475 17.3922 15.4748 17.3287 15.343 17.2097C15.2112 17.0907 15.1305 16.9254 15.1177 16.7483C15.0631 14.9621 14.3152 13.2674 13.0324 12.0232C11.7497 10.7791 10.0329 10.0833 8.24589 10.0833C6.4589 10.0833 4.74211 10.7791 3.45936 12.0232C2.17661 13.2674 1.42869 14.9621 1.3741 16.7483C1.36493 16.9278 1.28581 17.0966 1.1537 17.2185C1.02159 17.3404 0.847 17.4057 0.667329 17.4004C0.487658 17.3951 0.317197 17.3197 0.192466 17.1902C0.0677344 17.0608 -0.00134741 16.8877 1.99171e-05 16.7079C0.0500253 15.0609 0.591826 13.4665 1.55568 12.13C2.51954 10.7935 3.86133 9.77611 5.40835 9.2087C4.72895 8.74637 4.17296 8.12485 3.78885 7.39835C3.40475 6.67184 3.2042 5.86241 3.20469 5.04062ZM8.24635 1.37395C7.27389 1.37395 6.34126 1.76026 5.65363 2.44789C4.96599 3.13552 4.57969 4.06816 4.57969 5.04062C4.57969 6.01308 4.96599 6.94571 5.65363 7.63334C6.34126 8.32097 7.27389 8.70728 8.24635 8.70728C9.21881 8.70728 10.1514 8.32097 10.8391 7.63334C11.5267 6.94571 11.913 6.01308 11.913 5.04062C11.913 4.06816 11.5267 3.13552 10.8391 2.44789C10.1514 1.76026 9.21881 1.37395 8.24635 1.37395ZM15.8455 5.04062C15.7099 5.04062 15.5779 5.04978 15.4477 5.06812C15.3568 5.08439 15.2636 5.08219 15.1736 5.06165C15.0836 5.04111 14.9986 5.00265 14.9238 4.94857C14.849 4.89449 14.7858 4.82589 14.738 4.74686C14.6903 4.66783 14.659 4.58 14.6459 4.48861C14.6329 4.39721 14.6383 4.30412 14.6621 4.21489C14.6858 4.12566 14.7272 4.04211 14.7839 3.96924C14.8406 3.89637 14.9113 3.83566 14.992 3.79074C15.0727 3.74582 15.1616 3.71761 15.2534 3.70778C16.165 3.57597 17.0947 3.75105 17.896 4.20546C18.6973 4.65988 19.3247 5.36783 19.6796 6.21791C20.0344 7.068 20.0966 8.01194 19.8562 8.90119C19.6158 9.79045 19.0865 10.5745 18.3517 11.13C19.4319 11.6137 20.349 12.3996 20.9925 13.3929C21.6359 14.3863 21.9782 15.5446 21.978 16.7281C21.978 16.9105 21.9056 17.0853 21.7767 17.2143C21.6477 17.3432 21.4729 17.4156 21.2905 17.4156C21.1082 17.4156 20.9333 17.3432 20.8044 17.2143C20.6755 17.0853 20.603 16.9105 20.603 16.7281C20.6029 15.7052 20.2733 14.7096 19.6631 13.8887C19.0529 13.0678 18.1945 12.4653 17.215 12.1704L16.7255 12.0238V10.4874L17.1014 10.2959C17.6585 10.0137 18.1042 9.55195 18.3666 8.98525C18.6291 8.41856 18.6928 7.77996 18.5477 7.17256C18.4025 6.56516 18.0569 6.02439 17.5666 5.63757C17.0764 5.25075 16.47 5.04045 15.8455 5.04062Z"
          fill="black"
        />
      </svg>
      <span className="text-lg font-bold">
        {servs}
        <span className="font-semibold ml-1 text-black/60">SERVINGS</span>
      </span>
    </div>
  );
}
