<template>
  <div class="min-h-screen news-container" :class="{ 'light-mode': isLightMode, 'dark-mode': !isLightMode }">
    <!-- Header -->
      <nav class="navbar w-full">
        <div class="flex justify-between py-2 px-2 md:px-16 lg:px-16">
          <div class="flex items-center md:gap-4 lg:gap-4 gap-1 options z-10">
            <button
              type="button"
              class="hover:bg-gray-800 p-1 rounded"
              style="border: none; cursor: pointer;"
            >
              <Menu class="w-5 h-5" />
            </button>
            <button
              type="button"
              class="hover:bg-gray-800 p-1 rounded"
              style="border: none; cursor: pointer;"
            >
              <Bell class="w-5 h-5" />
            </button>
          </div>

          <div class="flex justify-center items-center w-full top-1/4 absolute left-1/2 transform -translate-x-1/2 ">
            <div class="block transition-all duration-500 ease-in" :class="{'opacity-100': showLogo,'opacity-0': !showLogo}" v-show="true" >
              <h1
                class="text-4xl font-bold tracking-tight"
                style="font-family: 'Old English Text MT', serif"
              >
                <svg v-if="isLightMode" width="225.63" height="21.84" viewBox="0 0 225.63 21.84" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000000" stroke-width="0.25mm" fill="#000000" style="stroke:#000000;stroke-width:0.25mm;fill:#000000"><path d="M 201.39 4.83 L 202.05 9.06 L 201.78 9.06 Q 201.36 7.29 200.415 6.15 Q 199.47 5.01 197.97 4.455 Q 196.47 3.9 194.37 3.9 Q 192.09 3.9 190.365 4.935 Q 188.64 5.97 187.68 7.875 Q 186.72 9.78 186.72 12.42 Q 186.72 15.03 187.68 16.95 Q 188.64 18.87 190.38 19.905 Q 192.12 20.94 194.4 20.94 Q 195.66 20.94 196.8 20.67 Q 197.94 20.4 199.005 19.815 Q 200.07 19.23 201 18.33 L 201.03 14.34 Q 201.06 13.77 200.685 13.47 Q 200.31 13.17 199.65 13.17 L 199.23 13.17 L 199.23 12.87 L 204.72 12.87 L 204.72 13.17 L 204.3 13.17 Q 202.95 13.17 202.95 14.37 L 202.95 17.97 Q 202.26 18.84 201.06 19.74 Q 199.86 20.64 198.195 21.24 Q 196.53 21.84 194.4 21.84 Q 191.43 21.81 189.225 20.67 Q 187.02 19.53 185.79 17.43 Q 184.56 15.33 184.56 12.42 Q 184.56 9.48 185.79 7.38 Q 187.02 5.28 189.24 4.14 Q 191.46 3 194.4 3 Q 195.78 3 196.995 3.195 Q 198.21 3.39 199.305 3.795 Q 200.4 4.2 201.39 4.83 Z M 146.79 0.66 L 146.79 3.99 L 146.52 3.99 Q 146.52 2.55 145.53 1.725 Q 144.54 0.9 143.13 0.9 Q 141.48 0.9 140.46 1.935 Q 139.44 2.97 139.44 4.35 Q 139.44 4.92 139.695 5.685 Q 139.95 6.45 140.64 7.11 L 146.55 12.57 Q 147.45 13.41 147.75 14.37 Q 148.05 15.33 148.05 16.23 Q 148.05 18.72 146.535 20.28 Q 145.02 21.84 142.44 21.84 Q 141.72 21.84 140.745 21.69 Q 139.77 21.54 138.855 21.165 Q 137.94 20.79 137.34 20.19 Q 137.25 19.71 137.25 18.99 Q 137.25 18.27 137.37 17.475 Q 137.49 16.68 137.7 16.02 L 137.97 16.02 Q 137.82 17.55 138.36 18.69 Q 138.9 19.83 139.935 20.415 Q 140.97 21 142.29 20.94 Q 143.94 20.85 145.125 19.785 Q 146.31 18.72 146.31 16.92 Q 146.31 16.05 146.01 15.345 Q 145.71 14.64 145.14 14.13 L 139.38 8.79 Q 138.48 7.95 138.12 6.945 Q 137.76 5.94 137.76 5.07 Q 137.76 3.81 138.36 2.64 Q 138.96 1.47 140.145 0.735 Q 141.33 0 143.04 0 Q 143.52 0 144.075 0.06 Q 144.63 0.12 145.155 0.225 Q 145.68 0.33 146.115 0.435 Q 146.55 0.54 146.79 0.66 Z M 46.47 3.42 L 53.22 3.42 Q 56.19 3.42 58.35 4.5 Q 60.51 5.58 61.68 7.605 Q 62.85 9.63 62.85 12.42 Q 62.85 15.21 61.68 17.22 Q 60.51 19.23 58.35 20.325 Q 56.19 21.42 53.22 21.42 L 46.83 21.42 L 46.77 20.52 L 50.295 20.52 L 52.47 20.52 L 53.22 20.52 Q 56.7 20.52 58.695 18.345 Q 60.69 16.17 60.69 12.42 Q 60.69 8.67 58.695 6.495 Q 56.7 4.32 53.22 4.32 L 52.44 4.32 L 50.16 4.32 L 46.47 4.32 L 46.47 3.42 Z M 163.38 6.09 L 163.08 2.97 L 179.7 18.63 L 180 21.84 L 163.38 6.09 Z M 10.47 2.85 L 11.07 0 L 19.95 21.24 L 17.4 21.24 L 10.47 2.85 Z M 11.07 0 L 10.8 0 Q 10.8 0.24 10.635 0.75 Q 10.47 1.26 10.245 1.8 Q 10.02 2.34 9.855 2.715 L 9.69 3.09 L 2.01 21.33 L 3.81 21.33 L 11.34 2.1 L 11.07 0 Z M 31.74 3 L 31.47 3 Q 31.44 3.3 31.26 3.81 Q 31.08 4.32 30.855 4.845 Q 30.63 5.37 30.465 5.73 L 30.3 6.09 L 23.19 21.33 L 25.08 21.33 L 31.95 5.07 L 31.74 3 Z M 118.2 3 L 117.93 3 Q 117.9 3.3 117.72 3.81 Q 117.54 4.32 117.315 4.845 Q 117.09 5.37 116.925 5.73 L 116.76 6.09 L 109.65 21.33 L 111.54 21.33 L 118.41 5.07 L 118.2 3 Z M 31.23 5.67 L 31.74 3 L 39.99 21.24 L 37.62 21.24 L 31.23 5.67 Z M 117.69 5.67 L 118.2 3 L 126.45 21.24 L 124.08 21.24 L 117.69 5.67 Z M 45.3 3.42 L 47.25 3.42 L 47.25 21.42 L 45.3 21.42 L 45.3 3.42 Z M 221.61 3.42 L 223.53 3.42 L 223.53 21.42 L 221.61 21.42 L 221.61 3.42 Z M 208.62 3.42 L 210.54 3.42 L 210.54 21.42 L 208.62 21.42 L 208.62 3.42 Z M 68.01 3.42 L 69.9 3.42 L 69.9 21.42 L 68.01 21.42 L 68.01 3.42 Z M 153.87 3.42 L 155.76 3.42 L 155.76 21.42 L 153.87 21.42 L 153.87 3.42 Z M 81.69 3.51 L 83.64 3.51 L 83.64 21.42 L 81.69 21.42 L 81.69 3.51 Z M 163.08 2.97 L 162.78 2.97 L 162.915 4.08 Q 163.05 5.19 163.05 6.72 L 163.05 21.42 L 164.4 21.42 L 164.37 4.65 L 163.08 2.97 Z M 180 21.84 L 180.27 21.84 L 180.195 21.285 Q 180.12 20.73 180.06 19.845 Q 180 18.96 180 18 L 180 3.42 L 178.68 3.42 L 178.68 20.25 L 180 21.84 Z M 74.43 3.39 L 90.9 3.39 L 90.9 4.29 L 74.43 4.29 L 74.43 3.39 Z M 93.48 3.45 L 96.09 3.45 L 101.64 13.32 L 100.41 14.37 L 93.48 3.45 Z M 100.77 13.98 L 107.13 3.45 L 109.02 3.45 L 101.88 14.31 L 100.77 13.98 Z M 210.21 12.09 L 221.91 12.09 L 221.91 12.99 L 210.21 12.99 L 210.21 12.09 Z M 5.91 13.23 L 15.3 13.23 L 15.3 14.13 L 5.91 14.13 L 5.91 13.23 Z M 100.14 13.68 L 102.09 13.68 L 102.09 21.42 L 100.14 21.42 L 100.14 13.68 Z M 27.33 14.43 L 35.28 14.43 L 35.28 15.33 L 27.33 15.33 L 27.33 14.43 Z M 113.79 14.43 L 121.74 14.43 L 121.74 15.33 L 113.79 15.33 L 113.79 14.43 Z M 16.65 19.23 L 19.11 19.23 Q 19.56 20.25 20.31 20.685 Q 21.06 21.12 21.75 21.12 L 21.87 21.12 L 21.99 21.12 L 21.99 21.42 L 15.24 21.42 L 15.24 21.12 L 15.51 21.12 Q 16.08 21.12 16.53 20.625 Q 16.98 20.13 16.65 19.23 Z M 97.14 5.31 L 94.59 5.22 Q 94.11 4.53 93.405 4.125 Q 92.7 3.72 91.83 3.72 L 91.47 3.72 L 91.47 3.42 L 98.43 3.42 L 98.43 3.72 L 98.25 3.72 L 98.07 3.72 Q 97.41 3.72 97.125 4.245 Q 96.84 4.77 97.14 5.31 Z M 36.81 19.23 L 39.09 19.23 Q 39.54 20.25 40.2 20.685 Q 40.86 21.12 41.46 21.12 L 41.58 21.12 L 41.7 21.12 L 41.7 21.42 L 35.55 21.42 L 35.55 21.12 L 35.79 21.12 Q 36.3 21.12 36.72 20.625 Q 37.14 20.13 36.81 19.23 Z M 123.27 19.23 L 125.55 19.23 Q 126 20.25 126.66 20.685 Q 127.32 21.12 127.92 21.12 L 128.04 21.12 L 128.16 21.12 L 128.16 21.42 L 122.01 21.42 L 122.01 21.12 L 122.25 21.12 Q 122.76 21.12 123.18 20.625 Q 123.6 20.13 123.27 19.23 Z M 107.88 5.25 L 105.99 5.34 Q 106.32 4.74 106.02 4.23 Q 105.72 3.72 105.06 3.72 L 104.88 3.72 L 104.7 3.72 L 104.7 3.42 L 110.97 3.42 L 110.97 3.72 L 110.61 3.72 Q 109.77 3.72 109.035 4.185 Q 108.3 4.65 107.88 5.25 Z M 2.91 19.23 L 4.62 19.23 Q 4.41 19.83 4.56 20.25 Q 4.71 20.67 5.055 20.895 Q 5.4 21.12 5.76 21.12 L 6.03 21.12 L 6.03 21.42 L 0 21.42 L 0 21.12 L 0.135 21.12 L 0.27 21.12 Q 0.96 21.12 1.695 20.685 Q 2.43 20.25 2.91 19.23 Z M 21.75 21.12 L 21.63 21.12 L 21.51 21.12 L 21.51 21.42 L 27.24 21.42 L 27.24 21.12 L 27 21.12 Q 26.46 21.12 26.04 20.625 Q 25.62 20.13 25.95 19.23 L 24.18 19.23 Q 23.7 20.25 23.04 20.685 Q 22.38 21.12 21.75 21.12 Z M 110.64 19.23 L 112.41 19.23 Q 112.08 20.13 112.5 20.625 Q 112.92 21.12 113.46 21.12 L 113.7 21.12 L 113.7 21.42 L 107.97 21.42 L 107.97 21.12 L 108.09 21.12 L 108.21 21.12 Q 108.84 21.12 109.5 20.685 Q 110.16 20.25 110.64 19.23 Z M 68.1 3.42 L 68.1 5.34 L 68.01 5.34 Q 67.98 4.65 67.395 4.185 Q 66.81 3.72 65.97 3.72 L 65.745 3.72 L 65.55 3.72 L 65.55 3.42 L 68.1 3.42 Z M 153.96 3.42 L 153.96 5.34 L 153.87 5.34 Q 153.84 4.65 153.255 4.185 Q 152.67 3.72 151.83 3.72 L 151.605 3.72 L 151.41 3.72 L 151.41 3.42 L 153.96 3.42 Z M 68.01 19.5 L 68.1 19.5 L 68.1 21.42 L 65.55 21.42 L 65.55 21.12 L 65.76 21.12 L 65.97 21.12 Q 66.81 21.12 67.395 20.64 Q 67.98 20.16 68.01 19.5 Z M 153.87 19.5 L 153.96 19.5 L 153.96 21.42 L 151.41 21.42 L 151.41 21.12 L 151.62 21.12 L 151.83 21.12 Q 152.67 21.12 153.255 20.64 Q 153.84 20.16 153.87 19.5 Z M 69.9 5.34 L 69.81 5.34 L 69.81 3.42 L 72.36 3.42 L 72.33 3.72 L 72.135 3.72 L 71.94 3.72 Q 71.1 3.72 70.515 4.185 Q 69.93 4.65 69.9 5.34 Z M 155.76 5.34 L 155.67 5.34 L 155.67 3.42 L 158.22 3.42 L 158.19 3.72 L 157.995 3.72 L 157.8 3.72 Q 156.96 3.72 156.375 4.185 Q 155.79 4.65 155.76 5.34 Z M 69.81 21.42 L 69.81 19.5 L 69.9 19.5 Q 69.93 20.16 70.515 20.64 Q 71.1 21.12 71.94 21.12 L 72.135 21.12 L 72.33 21.12 L 72.36 21.42 L 69.81 21.42 Z M 155.67 21.42 L 155.67 19.5 L 155.76 19.5 Q 155.79 20.16 156.375 20.64 Q 156.96 21.12 157.8 21.12 L 157.995 21.12 L 158.19 21.12 L 158.22 21.42 L 155.67 21.42 Z M 74.43 3.69 L 74.43 2.91 Q 74.7 3 75.255 3.12 Q 75.81 3.24 76.5 3.315 Q 77.19 3.39 77.79 3.39 L 74.43 3.69 Z M 90.9 2.91 L 90.9 3.69 L 87.54 3.39 Q 88.14 3.39 88.815 3.315 Q 89.49 3.24 90.06 3.12 Q 90.63 3 90.9 2.91 Z M 163.05 19.56 L 163.14 19.56 L 163.14 21.42 L 160.89 21.42 L 160.89 21.12 L 161.145 21.12 L 161.4 21.12 Q 162.09 21.12 162.57 20.67 Q 163.05 20.22 163.05 19.56 Z M 180 5.28 L 179.91 5.28 L 179.91 3.42 L 182.16 3.42 L 182.16 3.72 L 181.905 3.72 L 181.65 3.72 Q 180.99 3.72 180.495 4.17 Q 180 4.62 180 5.28 Z M 164.31 19.56 L 164.4 19.56 Q 164.4 20.22 164.895 20.67 Q 165.39 21.12 166.05 21.12 L 166.305 21.12 L 166.56 21.12 L 166.56 21.42 L 164.31 21.42 L 164.31 19.56 Z M 178.74 5.28 L 178.68 5.28 Q 178.65 4.62 178.17 4.17 Q 177.69 3.72 177 3.72 L 176.745 3.72 L 176.49 3.72 L 176.49 3.42 L 178.74 3.42 L 178.74 5.28 Z M 210.54 5.34 L 210.45 5.34 L 210.45 3.42 L 212.64 3.42 L 212.64 3.72 L 212.46 3.72 L 212.28 3.72 Q 211.56 3.72 211.05 4.185 Q 210.54 4.65 210.54 5.34 Z M 210.45 21.42 L 210.45 19.5 L 210.54 19.5 Q 210.54 20.16 211.05 20.64 Q 211.56 21.12 212.28 21.12 L 212.46 21.12 L 212.64 21.12 L 212.64 21.42 L 210.45 21.42 Z M 221.7 3.42 L 221.7 5.34 L 221.61 5.34 Q 221.58 4.65 221.085 4.185 Q 220.59 3.72 219.87 3.72 L 219.69 3.72 L 219.51 3.72 L 219.51 3.42 L 221.7 3.42 Z M 208.71 3.42 L 208.71 5.34 L 208.62 5.34 Q 208.59 4.65 208.095 4.185 Q 207.6 3.72 206.88 3.72 L 206.7 3.72 L 206.52 3.72 L 206.52 3.42 L 208.71 3.42 Z M 223.53 5.34 L 223.44 5.34 L 223.44 3.42 L 225.63 3.42 L 225.63 3.72 L 225.45 3.72 L 225.27 3.72 Q 224.55 3.72 224.055 4.185 Q 223.56 4.65 223.53 5.34 Z M 45.36 3.42 L 45.36 5.37 L 45.3 5.37 Q 45.27 4.65 44.775 4.185 Q 44.28 3.72 43.56 3.72 L 43.38 3.72 L 43.2 3.72 L 43.2 3.42 L 45.36 3.42 Z M 102 21.42 L 102 19.5 L 102.09 19.5 Q 102.12 20.16 102.615 20.64 Q 103.11 21.12 103.83 21.12 L 104.01 21.12 L 104.19 21.12 L 104.19 21.42 L 102 21.42 Z M 100.14 19.5 L 100.23 19.5 L 100.23 21.42 L 98.04 21.42 L 98.04 21.12 L 98.235 21.12 L 98.4 21.12 Q 99.12 21.12 99.615 20.64 Q 100.11 20.16 100.14 19.5 Z M 208.62 19.5 L 208.71 19.5 L 208.71 21.42 L 206.52 21.42 L 206.52 21.12 L 206.7 21.12 L 206.88 21.12 Q 207.6 21.12 208.095 20.64 Q 208.59 20.16 208.62 19.5 Z M 221.61 19.5 L 221.7 19.5 L 221.7 21.42 L 219.51 21.42 L 219.51 21.12 L 219.69 21.12 L 219.87 21.12 Q 220.59 21.12 221.085 20.64 Q 221.58 20.16 221.61 19.5 Z M 223.44 21.42 L 223.44 19.5 L 223.53 19.5 Q 223.56 20.16 224.055 20.64 Q 224.55 21.12 225.27 21.12 L 225.45 21.12 L 225.63 21.12 L 225.63 21.42 L 223.44 21.42 Z M 45.3 19.47 L 45.36 19.47 L 45.36 21.42 L 43.2 21.42 L 43.2 21.12 L 43.395 21.12 L 43.59 21.12 Q 44.31 21.12 44.79 20.625 Q 45.27 20.13 45.3 19.47 Z M 81.69 19.5 L 81.75 19.5 L 81.75 21.42 L 79.56 21.42 L 79.56 21.12 L 79.755 21.12 L 79.92 21.12 Q 80.64 21.12 81.15 20.64 Q 81.66 20.16 81.69 19.5 Z M 83.55 21.42 L 83.55 19.5 L 83.64 19.5 Q 83.67 20.16 84.18 20.64 Q 84.69 21.12 85.41 21.12 L 85.575 21.12 L 85.74 21.12 L 85.74 21.42 L 83.55 21.42 Z M 74.43 4.23 L 76.26 4.23 L 76.26 4.29 Q 75.57 4.32 75.165 4.755 Q 74.76 5.19 74.76 5.82 L 74.76 6.3 L 74.43 6.3 L 74.43 4.23 Z M 89.07 4.23 L 90.9 4.23 L 90.9 6.3 L 90.57 6.3 L 90.57 5.82 Q 90.57 5.19 90.165 4.755 Q 89.76 4.32 89.07 4.29 L 89.07 4.23 Z M 144.51 0.3 L 146.79 0.3 L 146.79 0.93 L 144.51 0.93 L 144.51 0.3 Z" vector-effect="non-scaling-stroke"/></g></svg>
              <svg v-else width="225.63" height="21.84" viewBox="0 0 225.63 21.84"
                  xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round"
                    fill-rule="evenodd" font-size="9pt" stroke="#000000" stroke-width="0.25mm"
                    fill="#fffcfc" style="stroke:#fffcfc;stroke-width:0.25mm;fill:#fffcfc"><path d="M 201.39 4.83 L 202.05 9.06 L 201.78 9.06 Q 201.36 7.29 200.415 6.15 Q 199.47 5.01 197.97 4.455 Q 196.47 3.9 194.37 3.9 Q 192.09 3.9 190.365 4.935 Q 188.64 5.97 187.68 7.875 Q 186.72 9.78 186.72 12.42 Q 186.72 15.03 187.68 16.95 Q 188.64 18.87 190.38 19.905 Q 192.12 20.94 194.4 20.94 Q 195.66 20.94 196.8 20.67 Q 197.94 20.4 199.005 19.815 Q 200.07 19.23 201 18.33 L 201.03 14.34 Q 201.06 13.77 200.685 13.47 Q 200.31 13.17 199.65 13.17 L 199.23 13.17 L 199.23 12.87 L 204.72 12.87 L 204.72 13.17 L 204.3 13.17 Q 202.95 13.17 202.95 14.37 L 202.95 17.97 Q 202.26 18.84 201.06 19.74 Q 199.86 20.64 198.195 21.24 Q 196.53 21.84 194.4 21.84 Q 191.43 21.81 189.225 20.67 Q 187.02 19.53 185.79 17.43 Q 184.56 15.33 184.56 12.42 Q 184.56 9.48 185.79 7.38 Q 187.02 5.28 189.24 4.14 Q 191.46 3 194.4 3 Q 195.78 3 196.995 3.195 Q 198.21 3.39 199.305 3.795 Q 200.4 4.2 201.39 4.83 Z M 146.79 0.66 L 146.79 3.99 L 146.52 3.99 Q 146.52 2.55 145.53 1.725 Q 144.54 0.9 143.13 0.9 Q 141.48 0.9 140.46 1.935 Q 139.44 2.97 139.44 4.35 Q 139.44 4.92 139.695 5.685 Q 139.95 6.45 140.64 7.11 L 146.55 12.57 Q 147.45 13.41 147.75 14.37 Q 148.05 15.33 148.05 16.23 Q 148.05 18.72 146.535 20.28 Q 145.02 21.84 142.44 21.84 Q 141.72 21.84 140.745 21.69 Q 139.77 21.54 138.855 21.165 Q 137.94 20.79 137.34 20.19 Q 137.25 19.71 137.25 18.99 Q 137.25 18.27 137.37 17.475 Q 137.49 16.68 137.7 16.02 L 137.97 16.02 Q 137.82 17.55 138.36 18.69 Q 138.9 19.83 139.935 20.415 Q 140.97 21 142.29 20.94 Q 143.94 20.85 145.125 19.785 Q 146.31 18.72 146.31 16.92 Q 146.31 16.05 146.01 15.345 Q 145.71 14.64 145.14 14.13 L 139.38 8.79 Q 138.48 7.95 138.12 6.945 Q 137.76 5.94 137.76 5.07 Q 137.76 3.81 138.36 2.64 Q 138.96 1.47 140.145 0.735 Q 141.33 0 143.04 0 Q 143.52 0 144.075 0.06 Q 144.63 0.12 145.155 0.225 Q 145.68 0.33 146.115 0.435 Q 146.55 0.54 146.79 0.66 Z M 46.47 3.42 L 53.22 3.42 Q 56.19 3.42 58.35 4.5 Q 60.51 5.58 61.68 7.605 Q 62.85 9.63 62.85 12.42 Q 62.85 15.21 61.68 17.22 Q 60.51 19.23 58.35 20.325 Q 56.19 21.42 53.22 21.42 L 46.83 21.42 L 46.77 20.52 L 50.295 20.52 L 52.47 20.52 L 53.22 20.52 Q 56.7 20.52 58.695 18.345 Q 60.69 16.17 60.69 12.42 Q 60.69 8.67 58.695 6.495 Q 56.7 4.32 53.22 4.32 L 52.44 4.32 L 50.16 4.32 L 46.47 4.32 L 46.47 3.42 Z M 163.38 6.09 L 163.08 2.97 L 179.7 18.63 L 180 21.84 L 163.38 6.09 Z M 10.47 2.85 L 11.07 0 L 19.95 21.24 L 17.4 21.24 L 10.47 2.85 Z M 11.07 0 L 10.8 0 Q 10.8 0.24 10.635 0.75 Q 10.47 1.26 10.245 1.8 Q 10.02 2.34 9.855 2.715 L 9.69 3.09 L 2.01 21.33 L 3.81 21.33 L 11.34 2.1 L 11.07 0 Z M 31.74 3 L 31.47 3 Q 31.44 3.3 31.26 3.81 Q 31.08 4.32 30.855 4.845 Q 30.63 5.37 30.465 5.73 L 30.3 6.09 L 23.19 21.33 L 25.08 21.33 L 31.95 5.07 L 31.74 3 Z M 118.2 3 L 117.93 3 Q 117.9 3.3 117.72 3.81 Q 117.54 4.32 117.315 4.845 Q 117.09 5.37 116.925 5.73 L 116.76 6.09 L 109.65 21.33 L 111.54 21.33 L 118.41 5.07 L 118.2 3 Z M 31.23 5.67 L 31.74 3 L 39.99 21.24 L 37.62 21.24 L 31.23 5.67 Z M 117.69 5.67 L 118.2 3 L 126.45 21.24 L 124.08 21.24 L 117.69 5.67 Z M 45.3 3.42 L 47.25 3.42 L 47.25 21.42 L 45.3 21.42 L 45.3 3.42 Z M 221.61 3.42 L 223.53 3.42 L 223.53 21.42 L 221.61 21.42 L 221.61 3.42 Z M 208.62 3.42 L 210.54 3.42 L 210.54 21.42 L 208.62 21.42 L 208.62 3.42 Z M 68.01 3.42 L 69.9 3.42 L 69.9 21.42 L 68.01 21.42 L 68.01 3.42 Z M 153.87 3.42 L 155.76 3.42 L 155.76 21.42 L 153.87 21.42 L 153.87 3.42 Z M 81.69 3.51 L 83.64 3.51 L 83.64 21.42 L 81.69 21.42 L 81.69 3.51 Z M 163.08 2.97 L 162.78 2.97 L 162.915 4.08 Q 163.05 5.19 163.05 6.72 L 163.05 21.42 L 164.4 21.42 L 164.37 4.65 L 163.08 2.97 Z M 180 21.84 L 180.27 21.84 L 180.195 21.285 Q 180.12 20.73 180.06 19.845 Q 180 18.96 180 18 L 180 3.42 L 178.68 3.42 L 178.68 20.25 L 180 21.84 Z M 74.43 3.39 L 90.9 3.39 L 90.9 4.29 L 74.43 4.29 L 74.43 3.39 Z M 93.48 3.45 L 96.09 3.45 L 101.64 13.32 L 100.41 14.37 L 93.48 3.45 Z M 100.77 13.98 L 107.13 3.45 L 109.02 3.45 L 101.88 14.31 L 100.77 13.98 Z M 210.21 12.09 L 221.91 12.09 L 221.91 12.99 L 210.21 12.99 L 210.21 12.09 Z M 5.91 13.23 L 15.3 13.23 L 15.3 14.13 L 5.91 14.13 L 5.91 13.23 Z M 100.14 13.68 L 102.09 13.68 L 102.09 21.42 L 100.14 21.42 L 100.14 13.68 Z M 27.33 14.43 L 35.28 14.43 L 35.28 15.33 L 27.33 15.33 L 27.33 14.43 Z M 113.79 14.43 L 121.74 14.43 L 121.74 15.33 L 113.79 15.33 L 113.79 14.43 Z M 16.65 19.23 L 19.11 19.23 Q 19.56 20.25 20.31 20.685 Q 21.06 21.12 21.75 21.12 L 21.87 21.12 L 21.99 21.12 L 21.99 21.42 L 15.24 21.42 L 15.24 21.12 L 15.51 21.12 Q 16.08 21.12 16.53 20.625 Q 16.98 20.13 16.65 19.23 Z M 97.14 5.31 L 94.59 5.22 Q 94.11 4.53 93.405 4.125 Q 92.7 3.72 91.83 3.72 L 91.47 3.72 L 91.47 3.42 L 98.43 3.42 L 98.43 3.72 L 98.25 3.72 L 98.07 3.72 Q 97.41 3.72 97.125 4.245 Q 96.84 4.77 97.14 5.31 Z M 36.81 19.23 L 39.09 19.23 Q 39.54 20.25 40.2 20.685 Q 40.86 21.12 41.46 21.12 L 41.58 21.12 L 41.7 21.12 L 41.7 21.42 L 35.55 21.42 L 35.55 21.12 L 35.79 21.12 Q 36.3 21.12 36.72 20.625 Q 37.14 20.13 36.81 19.23 Z M 123.27 19.23 L 125.55 19.23 Q 126 20.25 126.66 20.685 Q 127.32 21.12 127.92 21.12 L 128.04 21.12 L 128.16 21.12 L 128.16 21.42 L 122.01 21.42 L 122.01 21.12 L 122.25 21.12 Q 122.76 21.12 123.18 20.625 Q 123.6 20.13 123.27 19.23 Z M 107.88 5.25 L 105.99 5.34 Q 106.32 4.74 106.02 4.23 Q 105.72 3.72 105.06 3.72 L 104.88 3.72 L 104.7 3.72 L 104.7 3.42 L 110.97 3.42 L 110.97 3.72 L 110.61 3.72 Q 109.77 3.72 109.035 4.185 Q 108.3 4.65 107.88 5.25 Z M 2.91 19.23 L 4.62 19.23 Q 4.41 19.83 4.56 20.25 Q 4.71 20.67 5.055 20.895 Q 5.4 21.12 5.76 21.12 L 6.03 21.12 L 6.03 21.42 L 0 21.42 L 0 21.12 L 0.135 21.12 L 0.27 21.12 Q 0.96 21.12 1.695 20.685 Q 2.43 20.25 2.91 19.23 Z M 21.75 21.12 L 21.63 21.12 L 21.51 21.12 L 21.51 21.42 L 27.24 21.42 L 27.24 21.12 L 27 21.12 Q 26.46 21.12 26.04 20.625 Q 25.62 20.13 25.95 19.23 L 24.18 19.23 Q 23.7 20.25 23.04 20.685 Q 22.38 21.12 21.75 21.12 Z M 110.64 19.23 L 112.41 19.23 Q 112.08 20.13 112.5 20.625 Q 112.92 21.12 113.46 21.12 L 113.7 21.12 L 113.7 21.42 L 107.97 21.42 L 107.97 21.12 L 108.09 21.12 L 108.21 21.12 Q 108.84 21.12 109.5 20.685 Q 110.16 20.25 110.64 19.23 Z M 68.1 3.42 L 68.1 5.34 L 68.01 5.34 Q 67.98 4.65 67.395 4.185 Q 66.81 3.72 65.97 3.72 L 65.745 3.72 L 65.55 3.72 L 65.55 3.42 L 68.1 3.42 Z M 153.96 3.42 L 153.96 5.34 L 153.87 5.34 Q 153.84 4.65 153.255 4.185 Q 152.67 3.72 151.83 3.72 L 151.605 3.72 L 151.41 3.72 L 151.41 3.42 L 153.96 3.42 Z M 68.01 19.5 L 68.1 19.5 L 68.1 21.42 L 65.55 21.42 L 65.55 21.12 L 65.76 21.12 L 65.97 21.12 Q 66.81 21.12 67.395 20.64 Q 67.98 20.16 68.01 19.5 Z M 153.87 19.5 L 153.96 19.5 L 153.96 21.42 L 151.41 21.42 L 151.41 21.12 L 151.62 21.12 L 151.83 21.12 Q 152.67 21.12 153.255 20.64 Q 153.84 20.16 153.87 19.5 Z M 69.9 5.34 L 69.81 5.34 L 69.81 3.42 L 72.36 3.42 L 72.33 3.72 L 72.135 3.72 L 71.94 3.72 Q 71.1 3.72 70.515 4.185 Q 69.93 4.65 69.9 5.34 Z M 155.76 5.34 L 155.67 5.34 L 155.67 3.42 L 158.22 3.42 L 158.19 3.72 L 157.995 3.72 L 157.8 3.72 Q 156.96 3.72 156.375 4.185 Q 155.79 4.65 155.76 5.34 Z M 69.81 21.42 L 69.81 19.5 L 69.9 19.5 Q 69.93 20.16 70.515 20.64 Q 71.1 21.12 71.94 21.12 L 72.135 21.12 L 72.33 21.12 L 72.36 21.42 L 69.81 21.42 Z M 155.67 21.42 L 155.67 19.5 L 155.76 19.5 Q 155.79 20.16 156.375 20.64 Q 156.96 21.12 157.8 21.12 L 157.995 21.12 L 158.19 21.12 L 158.22 21.42 L 155.67 21.42 Z M 74.43 3.69 L 74.43 2.91 Q 74.7 3 75.255 3.12 Q 75.81 3.24 76.5 3.315 Q 77.19 3.39 77.79 3.39 L 74.43 3.69 Z M 90.9 2.91 L 90.9 3.69 L 87.54 3.39 Q 88.14 3.39 88.815 3.315 Q 89.49 3.24 90.06 3.12 Q 90.63 3 90.9 2.91 Z M 163.05 19.56 L 163.14 19.56 L 163.14 21.42 L 160.89 21.42 L 160.89 21.12 L 161.145 21.12 L 161.4 21.12 Q 162.09 21.12 162.57 20.67 Q 163.05 20.22 163.05 19.56 Z M 180 5.28 L 179.91 5.28 L 179.91 3.42 L 182.16 3.42 L 182.16 3.72 L 181.905 3.72 L 181.65 3.72 Q 180.99 3.72 180.495 4.17 Q 180 4.62 180 5.28 Z M 164.31 19.56 L 164.4 19.56 Q 164.4 20.22 164.895 20.67 Q 165.39 21.12 166.05 21.12 L 166.305 21.12 L 166.56 21.12 L 166.56 21.42 L 164.31 21.42 L 164.31 19.56 Z M 178.74 5.28 L 178.68 5.28 Q 178.65 4.62 178.17 4.17 Q 177.69 3.72 177 3.72 L 176.745 3.72 L 176.49 3.72 L 176.49 3.42 L 178.74 3.42 L 178.74 5.28 Z M 210.54 5.34 L 210.45 5.34 L 210.45 3.42 L 212.64 3.42 L 212.64 3.72 L 212.46 3.72 L 212.28 3.72 Q 211.56 3.72 211.05 4.185 Q 210.54 4.65 210.54 5.34 Z M 210.45 21.42 L 210.45 19.5 L 210.54 19.5 Q 210.54 20.16 211.05 20.64 Q 211.56 21.12 212.28 21.12 L 212.46 21.12 L 212.64 21.12 L 212.64 21.42 L 210.45 21.42 Z M 221.7 3.42 L 221.7 5.34 L 221.61 5.34 Q 221.58 4.65 221.085 4.185 Q 220.59 3.72 219.87 3.72 L 219.69 3.72 L 219.51 3.72 L 219.51 3.42 L 221.7 3.42 Z M 208.71 3.42 L 208.71 5.34 L 208.62 5.34 Q 208.59 4.65 208.095 4.185 Q 207.6 3.72 206.88 3.72 L 206.7 3.72 L 206.52 3.72 L 206.52 3.42 L 208.71 3.42 Z M 223.53 5.34 L 223.44 5.34 L 223.44 3.42 L 225.63 3.42 L 225.63 3.72 L 225.45 3.72 L 225.27 3.72 Q 224.55 3.72 224.055 4.185 Q 223.56 4.65 223.53 5.34 Z M 45.36 3.42 L 45.36 5.37 L 45.3 5.37 Q 45.27 4.65 44.775 4.185 Q 44.28 3.72 43.56 3.72 L 43.38 3.72 L 43.2 3.72 L 43.2 3.42 L 45.36 3.42 Z M 102 21.42 L 102 19.5 L 102.09 19.5 Q 102.12 20.16 102.615 20.64 Q 103.11 21.12 103.83 21.12 L 104.01 21.12 L 104.19 21.12 L 104.19 21.42 L 102 21.42 Z M 100.14 19.5 L 100.23 19.5 L 100.23 21.42 L 98.04 21.42 L 98.04 21.12 L 98.235 21.12 L 98.4 21.12 Q 99.12 21.12 99.615 20.64 Q 100.11 20.16 100.14 19.5 Z M 208.62 19.5 L 208.71 19.5 L 208.71 21.42 L 206.52 21.42 L 206.52 21.12 L 206.7 21.12 L 206.88 21.12 Q 207.6 21.12 208.095 20.64 Q 208.59 20.16 208.62 19.5 Z M 221.61 19.5 L 221.7 19.5 L 221.7 21.42 L 219.51 21.42 L 219.51 21.12 L 219.69 21.12 L 219.87 21.12 Q 220.59 21.12 221.085 20.64 Q 221.58 20.16 221.61 19.5 Z M 223.44 21.42 L 223.44 19.5 L 223.53 19.5 Q 223.56 20.16 224.055 20.64 Q 224.55 21.12 225.27 21.12 L 225.45 21.12 L 225.63 21.12 L 225.63 21.42 L 223.44 21.42 Z M 45.3 19.47 L 45.36 19.47 L 45.36 21.42 L 43.2 21.42 L 43.2 21.12 L 43.395 21.12 L 43.59 21.12 Q 44.31 21.12 44.79 20.625 Q 45.27 20.13 45.3 19.47 Z M 81.69 19.5 L 81.75 19.5 L 81.75 21.42 L 79.56 21.42 L 79.56 21.12 L 79.755 21.12 L 79.92 21.12 Q 80.64 21.12 81.15 20.64 Q 81.66 20.16 81.69 19.5 Z M 83.55 21.42 L 83.55 19.5 L 83.64 19.5 Q 83.67 20.16 84.18 20.64 Q 84.69 21.12 85.41 21.12 L 85.575 21.12 L 85.74 21.12 L 85.74 21.42 L 83.55 21.42 Z M 74.43 4.23 L 76.26 4.23 L 76.26 4.29 Q 75.57 4.32 75.165 4.755 Q 74.76 5.19 74.76 5.82 L 74.76 6.3 L 74.43 6.3 L 74.43 4.23 Z M 89.07 4.23 L 90.9 4.23 L 90.9 6.3 L 90.57 6.3 L 90.57 5.82 Q 90.57 5.19 90.165 4.755 Q 89.76 4.32 89.07 4.29 L 89.07 4.23 Z M 144.51 0.3 L 146.79 0.3 L 146.79 0.93 L 144.51 0.93 L 144.51 0.3 Z" vector-effect="non-scaling-stroke"/></g></svg>

              </h1>
              <p class="text-sm italic mt-1 text-center w-full" style="color:
              var(--text-color-muted);font-family:'georgia', 'Times New Roman', serif;">Driven by Curiosity. Defined by Craft</p>
            </div>
          </div>

          <div class="flex items-center md:gap-4 lg:gap-4 gap-1 z-10">
            <button
              type="button"
              class="p-1 rounded"
              style="background: none; border: none; cursor: pointer;"
              @click="toggleMode"
            >
              <span class="lightNight" v-if="isLightMode"><Sun /></span><span class="lightNight" v-else><Moon /></span>
            </button>
            <button class="subscribe-button flex" style="border: none; cursor: pointer; border-radius: 5px; padding: 0.6rem 0.9rem;">
            <span class="resume-text">Resume</span> <Download class="resume-icon"/>
            </button>
            <!--<button
              type="button"
              class="hover:bg-gray-800 p-1 rounded"
              style="background: none; border: none; cursor: pointer"
            >
              <User class="w-5 h-5" />
            </button>-->
          </div>
        </div>
      </nav>
    <!--<Home :isLightMode2=isLightMode />-->
    <div class="main-content">
      <Home v-if="currentRoute === '/'" :isLightMode2="isLightMode" :setRoute="setRoute" :currentRoute="currentRoute" />
      <Experience v-else-if="currentRoute === '/experience'" :isLightMode2="isLightMode" :setRoute="setRoute" :currentRoute="currentRoute" />
      <SkillsandTools v-else-if="currentRoute === '/skills'" :isLightMode2="isLightMode" :setRoute="setRoute" :currentRoute="currentRoute" />
      <Projects v-else-if="currentRoute === '/projects'" :isLightMode2="isLightMode" :setRoute="setRoute" :currentRoute="currentRoute" />
      <Publications v-else-if="currentRoute === '/publications'" :isLightMode2="isLightMode" :setRoute="setRoute" :currentRoute="currentRoute" />
      <Contact v-else-if="currentRoute === '/contact'" :isLightMode2="isLightMode" :setRoute="setRoute" :currentRoute="currentRoute" />
      <div v-else class="text-center p-4">Page not found</div>
    </div>
    <!-- Main Content -->
    <div class="w-full footer">
      <div class="footer-bottom flex flex-wrap md:flex-nowrap justify-between items-center px-16
        py-2 gap-4 fixed left-0 bottom-0 mt-0">

    <!-- Left Text -->
        <div class="text-block text-sm whitespace-nowrap">
          © 2025 AAditya Singh. All Rights Reserved.
        </div>

    <!-- Center Links -->
        <div class="bottom-links flex gap-6 text-sm  whitespace-nowrap">
          <a href="#" class="hover:underline">Privacy Policy</a>
          <a href="#" class="hover:underline">Terms of Service</a>
        </div>

    <!-- Social Icons -->
        <div class="text-block flex gap-4 text-xl whitespace-nowrap">
          <div class="linkedin-icon"><Linkedin /></div>
          <div class="github-icon"><Github /></div>
          <div class="twitter-icon"><Twitter /></div>
          <div class="facebook-icon"><Facebook /></div>
          <div class="mail-icon"><Mail /></div>
        </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref,onMounted, onBeforeUnmount, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import {
  Menu,
  Bell,
  Moon,
  Sun,
  Download,
  User,
  Clock,
  Share2,
  Bookmark,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Mail
} from 'lucide-vue-next';
import Home from './Home.vue';
import Experience from './Experience.vue';
import Contact from './Contact.vue';
import SkillsandTools from './Skills_and_Tools.vue';
import Projects from './Projects.vue';
import Publications from './Publications.vue';

export default defineComponent({
  name: 'NewsArticle',
  components: {
    RouterLink,
    Menu,
    Moon,
    Sun,
    Home,
    Experience,
    Contact,
    SkillsandTools,
    Projects,
    Publications,
    Download,
    Bell,
    User,
    Clock,
    Share2,
    Bookmark,
    MessageCircle,
    Sparkles,
    ChevronRight,
    Linkedin,
    Twitter,
    Github,
    Facebook,
    Mail

  },
  setup() {
    const route = useRoute();
    const isLightMode = ref(false);
    const showLogo = ref(false);

    // 2. Initialize currentRoute. The watcher will set the correct value.
    const currentRoute = ref('/');

    // 3. Add a watcher to keep your state in sync with the URL
    watch(() => route.path, (newPath) => {
      // Check if newPath is not null or undefined before updating
      if (newPath) {
        currentRoute.value = newPath;
        showLogo.value = currentRoute.value !== '/';
        console.log(`${currentRoute.value} - ${showLogo.value}`);
      }
    }, { immediate: true }); // 'immediate: true' runs the watcher on component creation

    const toggleMode = () => {
      isLightMode.value = !isLightMode.value;
    };

    const handleScroll = () => {
      if(currentRoute.value==='/'){
        showLogo.value = window.scrollY > 150;
      }
    };

    const setRoute = (routePath: string) => {
      currentRoute.value = routePath;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isLightMode,
      toggleMode,
      showLogo,
      currentRoute,
      setRoute,
    };

  },

});
</script>

<style scoped>
.footer{
   /*background-color: var(--background-color) !important;*/

}

.bottom-links {
  display: flex;
  gap: 1.5rem;
}

.bottom-links a {
  text-decoration: none;
  color: var(--text-color-muted);
  transition: color 0.3s ease;
}

.bottom-links a:hover {
  color: var(--text-color);
}
.footer-bottom {
  background-color: var(--background-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
  width: 100%;
  align-items: center;
  padding-top: 2rem;
  font-size: 0.875rem;
}

.bottom-links {
  display: flex;
  gap: 1.5rem;
}

.bottom-links a {
  text-decoration: none;
  color: var(--text-color-muted);
  transition: color 0.3s ease;
}

.bottom-links a:hover {
  color: var(--text-color);
}

.lightNight{
  color: var(--accent-color);
  transition: 1s;
}

.news-container {
  background-color: var(--background-color);
  transition: 1s;
  color: var(--text-color);
  font-family: Arial, sans-serif;
  width: 100vw !important;
  /*padding-top: 2rem;*/
  height: 100%;
  border: none;
  outline: none;
}

.navbar {
  position: fixed !important;
  background-color: var(--background-color);
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  padding-top: 0.5rem;
  border: none;
}
.navbar div{
  justify: space-between;
}



.subscribe-button {
  background-color: var(--accent-color);
  color: var(--accent-text);
}

.subscribe-button:hover {
  background-color: var(--accent-color-hover)!important;
  color: var(--accent-text-hover) !important;
}

header .px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

header .py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

nav {
  /*border-bottom: 1px solid var(--border-color);*/
  padding-top: 2px;
  padding-bottom: 16px;
}

/*nav .flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}*/

.linkedin-icon:hover{
  color: #0a66c2;
}

/*.github-icon:hover{
  color: #333333;
}*/

.twitter-icon:hover{
  color: #1D9BF0;
}

.facebook-icon:hover{
  color: #0866FF;
}

.mail-icon:hover{
  color: #db4437;
}


nav a {
  color: var(--text-color);
  font-weight: 900;
}

nav a:hover {
  color: var(--text-color-muted);
}

nav .border-b-2 {
  border-bottom-width: 2px;
  border-bottom-color: var(--text-color);
}

nav .pb-1 {
  padding-bottom: 0.25rem;
}

.trending-bar {
  /*border-top: 1px solid var(--border-color);*/
  padding-top: 12px;
  padding-bottom: 12px;
}

.trending-bar .flex {
  display: flex;
  align-items: center;
  gap: 24px;
}

.trending-bar .gap-2 {
  gap: 8px;
}

.live-tag {
  background-color: var(--live-color);
}

.trending-bar .text-xs {
  font-size: 0.75rem;
}

.trending-bar .px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.trending-bar .py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

main {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
}

main .grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
  main .grid {
    grid-template-columns: 2fr 1fr;
    gap: 48px;
  }
}

.options button{
  color: var(--text-color) !important;
  background-color: var(--background-color) !important;
}

main h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  color: var(--text-color);
}

main p {
  font-size: 1.25rem;
  color: var(--text-color-muted);
  line-height: 1.625;
}

main .text-sm {
  font-size: 0.875rem;
  color: var(--text-color-muted);
}

main .gap-6 {
  gap: 24px;
}

main .py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}

main img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 0.5rem;
}

aside h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
}

aside h3 {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.1;
  color: var(--text-color);
}

aside p {
    font-size: 0.875rem;
    color: var(--text-color-muted);
}

aside .gap-3 {
  gap: 12px;
}

aside .text-2xl {
  font-size: 1.5rem;
}

.resume-text {
  display: none;
}

aside .mt-1 {
  margin-top: 0.25rem;
}

.most-read-number {
    color: var(--most-read-number-color);
}

.resume-icon{
  width: 15px;
  height: 15px;
  /*margin-left: 0.2rem; */
  /*margin-top: 0.2rem;*/
}

.main-content{
  padding-bottom: 6rem;
}

@media (min-width: 700px) {
  .resume-text {
    display: inline;
    margin-right: 0.4rem;
  }

  .resume-icon{
    margin-left: 0.2rem;
    margin-top: 0.2rem;
  }
}
</style>
