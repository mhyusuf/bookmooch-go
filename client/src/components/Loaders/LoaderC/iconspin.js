import React from 'react';
import './LoaderC.scss';

function LoaderC() {
  return (
    <div className="grand_wrapperC">
      {/* icon from Loading.io*/}
      <svg className="iconspin" viewBox="0 0 100 100" y="0" x="0" width="47px" height="47px">
        <g className="ldl-scale">
          <g>
            <path className="coverr" d="M89.115 31.385a.945.945 0 0 0-.567-.691L50.137 14.591a.952.952 0 0 0-1.054.214L12.792 51.97c-.319.327-.283.709-.253.858s.146.515.567.691l6.303 2.643 3.338 1.399 28.77 12.062a.95.95 0 0 0 1.054-.214l26.337-26.971 2.528-2.589 7.426-7.605a.95.95 0 0 0 .253-.859z"></path>
            <path className="pages" d="M82.245 43.837L54.979 71.761a4.3 4.3 0 0 1-4.763.966L20.219 60.151l-3.338-1.399-2.364-.991-1.714-.719c-.523-.219-1.07-.68-1.575-.169-.224.227-.334.541-.413.85-.279 1.087-.222 2.275-.179 3.388.046 1.188.217 2.371.496 3.527.168.694.372 1.379.61 2.053.229.647.471 1.321.837 1.906.214.341.511.729.896.871a6.3 6.3 0 0 1 .259.101l.526.221 1.471.617 1.962.823 2.372.995 2.702 1.133 2.951 1.237 3.119 1.308 3.206 1.344 3.213 1.347 3.139 1.316 2.984 1.251 2.749 1.152 2.433 1.02 2.036.854a1031.432 1031.432 0 0 0 2.558 1.072l.361.151a.953.953 0 0 0 1.054-.214l33.674-34.485V39.744l-1.471 1.507-2.528 2.586z"></path>
            <line className="custom-line" x1="52.5" y1="70" x2="52.5" y2="87"/>
            <path className="main-outline" d="M91.27 34.595a4.315 4.315 0 0 0 1.143-3.879 4.319 4.319 0 0 0-2.564-3.126L51.438 11.487a4.303 4.303 0 0 0-4.763.966l-.539.552-2.508 2.568-4.085 4.183-5.142 5.266-5.679 5.816-5.696 5.834-5.194 5.319-4.172 4.272c-1.183 1.211-2.366 2.294-3.319 3.724-.655.984-1.058 2.005-1.466 3.11a22.866 22.866 0 0 0-.797 2.62 21.169 21.169 0 0 0-.532 3.459 21.15 21.15 0 0 0 .695 6.939c.483 1.797 1.101 3.638 2.295 5.097.569.695 1.173 1.217 2.01 1.507.228.079.45.189.673.282l4.432 1.858 6.439 2.7 7.409 3.106 7.342 3.078 6.237 2.615 4.094 1.716 1.041.437a4.304 4.304 0 0 0 4.763-.966L91.27 50.381a4.32 4.32 0 0 0-1.421-7.005l-.239-.1v-6.981l1.66-1.7zm-5.025 7.27V50.709L52.571 85.194a.951.951 0 0 1-1.054.214l-.361-.151-1-.419-1.558-.653-2.036-.854-2.433-1.02-2.749-1.152-2.984-1.251-3.139-1.316-3.213-1.347-3.206-1.344-3.119-1.308-2.951-1.237-2.702-1.133-2.372-.995-1.962-.823-1.471-.617-.526-.221a6.3 6.3 0 0 0-.259-.101c-.385-.142-.682-.53-.896-.871-.366-.584-.608-1.258-.837-1.906a20.935 20.935 0 0 1-.61-2.053 18.013 18.013 0 0 1-.496-3.527c-.043-1.113-.1-2.302.179-3.388.079-.309.189-.623.413-.85.505-.511 1.051-.051 1.575.169l1.714.719 2.364.991 3.338 1.399 29.997 12.576a4.299 4.299 0 0 0 4.763-.966l27.266-27.924 2.528-2.589 1.471-1.507v2.126zm2.617-9.622l-7.426 7.605-2.528 2.589-26.337 26.972a.953.953 0 0 1-1.054.214l-28.77-12.062-3.338-1.399-6.303-2.643a.945.945 0 0 1-.513-1.235c.017-.037.036-.074.054-.11a.914.914 0 0 1 .145-.204l36.291-37.165a.951.951 0 0 1 1.054-.214l38.411 16.104a.945.945 0 0 1 .567.691.946.946 0 0 1-.253.857z"></path>
          </g>
          <g>
            <circle className="circle" strokeMiterlimit="10" strokeWidth="2" stroke="#000" fill="#fff" r="14.738" cy="67.285" cx="74.396"></circle>
            <g>
              <path className="dot" d="M67.75 69.285h-.5a2 2 0 0 1 0-4h.5a2 2 0 0 1 0 4z"></path>
              <path className="dot" d="M74.8 69.285h-.5a2 2 0 0 1 0-4h.5a2 2 0 0 1 0 4z"></path>
              <path className="dot" d="M81.541 69.285h-.5a2 2 0 0 1 0-4h.5a2 2 0 0 1 0 4z"></path>
            </g>
          </g>
        </g>
      </svg>
      <p>Loading...</p>
    </div>
  );
}

export default LoaderC;