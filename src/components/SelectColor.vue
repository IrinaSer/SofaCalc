<template>
  <div class="sofa-filter">
    <div class="sofa-filter__left">
      <div class="sofa-filter__options">
        <div class="sofa-filter__options-title">Показать:</div>
        <label class="sofa-filter__label">
          <input class="sofa-filter__radio" name="material" type="radio" value="all" v-model="currentType">
          Все
        </label>
        <label
                v-for="(material, key) in palettes"
                :key="key"
                class="sofa-filter__label"
        >
          <input name="material" type="radio" :value="key" class="sofa-filter__radio" v-model="currentType">
          {{ material.text }}
        </label>
      </div>
      <div class="sofa-filter__parts ">
        <div
                class="sofa-filter__parts-item"
                :class="mainColor ? 'active' : ''"
                @click="mainColor = !mainColor"
        >
          <div class="sofa-filter__collection-color-wrap">
            <img
                    :src="selectProduct.selectMainColor.hasOwnProperty('pic') ? selectProduct.selectMainColor.pic : ''"
                    :alt="selectProduct.selectMainColor.color">
          </div>
          <div class="info-wrap">
            <div class="info">Основная</div>
            <div class="name">{{ selectProduct.selectMainColor.collection }}
            </div>
            <div class="material">{{ selectProduct.selectMainColor.type }}
            </div>
          </div>
        </div>
        <div
                class="sofa-filter__parts-item"
                :class="!mainColor ? 'active' : ''"
                @click="mainColor = !mainColor"
        >
          <div class="sofa-filter__collection-color-wrap">
            <img
                    :src="selectProduct.selectCompanionColor.hasOwnProperty('pic') ? selectProduct.selectCompanionColor.pic :''"
                    :alt="selectProduct.selectCompanionColor.color">
          </div>
          <div class="info-wrap">
            <div class="info">Компаньон</div>
            <div class="name">{{ selectProduct.selectCompanionColor.collection }}</div>
            <div class="material">{{ selectProduct.selectCompanionColor.type }}</div>
          </div>
        </div>
      </div>
      <vue-custom-scrollbar class="sofa-filter__collections-wrap">
        <div class="sofa-filter__collections">
          <div
                  class="sofa-filter__collection"
                  v-for="(collection, key) in showTypes.collections"
                  :key="key"
          >
            <div class="sofa-filter__collection-colors">
              <div
                      class="sofa-filter__collection-color-wrap"
                      v-for="(collectionColors, key) in collection.colors"
                      :key="key"
                      @click="changeColor(collection.type,
                                    collection.name,
                                    collectionColors.name,
                                    collection.groupPrice,
                                    collectionColors.pic)"
                      :class="(collection.name===showSelectColor.collection && collectionColors.name===showSelectColor.color) ? 'active' : ''"
              >
                <img :src="collectionColors.pic" :alt="collectionColors.name">
              </div>
            </div>
            <div class="sofa-filter__collection-info">
              <div class="sofa-filter__collection-info-top">
                <span class="name">{{ collection.name }}</span>
                <span class="price">{{ collection.groupPrice }} руб.</span>
              </div>
              <div class="sofa-filter__collection-info-bottom">{{ collection.type}}</div>
            </div>
          </div>
        </div>
      </vue-custom-scrollbar>
    </div>
    <div class="sofa-filter__right">
      <svg id="constructor_base_svg" version="1.1" xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="0" height="0" viewBox="0 0 2000 2000"
           enable-background="new 0 0 2000 2000" xml:space="preserve">
          <defs>
            <pattern id="img1" patternUnits="userSpaceOnUse" width="300" height="300">
              <image
                      id="basicColor"
                      :xlink:href="selectProduct.selectMainColor.hasOwnProperty('pic') ? selectProduct.selectMainColor.pic : ''"
                      x="0" y="0" width="300" height="300"></image>
            </pattern>
            <pattern id="img2" patternUnits="userSpaceOnUse" width="300" height="300">
              <image
                      id="companionColor"
                      :xlink:href="selectProduct.selectCompanionColor.hasOwnProperty('pic') ? selectProduct.selectCompanionColor.pic : ''"
                      x="0" y="0" width="300" height="300"></image>
            </pattern>
          </defs>
        </svg>
      <svg style='max-width: 100%;height: 320px;margin-top: -50px;' version="1.1" xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           width="100%" viewBox="0 0 2000 2000" enable-background="new 0 0 2000 2000" xml:space="preserve">
          <g fill="url(#img1)" fill-rule="evenodd" clip-rule="evenodd" stroke="none" stroke-miterlimit="10">
            <path fill-rule="evenodd" clip-rule="evenodd" stroke="#000000" stroke-miterlimit="10" d="M551,527
              c15.271,4.893,32.681-2.286,52,1c7.638,1.299,19.175-0.145,29,0c23.405,0.346,45.052-1.425,62,1c13.803,1.976,34.781-1.963,41,1
              c12.317-1.014,21.128-1.321,28,0c8.022,1.542,15.31-0.95,19,2c2.695,1.481,3.021,1.672,4,5c0.333,0,0.667,0,1,0
              c0.395-3.711,0.577-2.953,2-5c21.505-7.997,50.757,1.203,84-4c2.739-0.429,6.295,1.628,12,1c29.267-3.225,57.269,0.452,86-1
              c9.33-0.472,18.655,2.323,28,1c11.756-1.664,23.903,1.642,36,0c10.2-1.384,25.655-1.402,35,0c3.033,0.455,8.158-0.781,10-1
              c3.783-0.45,10.12,0.693,12,1c7.922,1.292,21.483-1.367,29,0c8.875,1.614,15.461-0.791,23-1c18.993-0.526,30.195,1.494,42,2
              c7.899,0.339,18.979,1.302,24,0c2.174,0.863,8.69,7.005,9,6c1.845-2.121,0.918-2.733,4-4c5.704-4.142,12.558-0.416,23-2
              c17.592-2.668,28.734,1.891,52-1c7.871-0.978,11.478,1.874,24,0c8.888-1.33,28.539-1.988,41,0c8.767,1.398,20.777-1.412,30,0
              c7.557,1.156,25.137-1,35-1c36.096-0.002,74.099-2.002,91,1c4.288,0.762,5.155-0.907,8-1c11.492-0.377,23.767-0.55,32,1
              c9.333,0,18.667,0,28,0c19.015,0.299,42.232-0.882,60,3c7.76,13.408,5.266,22.222,8,40c1.663,10.818,4.726,33.087,1,54
              c-0.183,1.023,1.522,2.658,1,5c-2.182,9.775-6.802,23.069-8,32c-0.85,6.334,3.891,15.257,6,22c2.355,7.532,2.103,15.333,4,25
              c1.822,9.28,2.387,55.594,1,63c-2.228,11.894,3.127,24.552,1,31c-1.27,3.848-7.036,7.399-9,11c-2.83,5.188-3.555,11.564-5,16
              c-1.946,5.974-1.042,11.42-1,16c0.045,5.038-1.862,8.87-3,15c-2.275,12.252-0.137,22.701-3,35c-1.875,8.055-1.716,27.408,2,29
              c7.892,6.786,17.478,1.979,25,8c-0.804,1.021-0.355,0.274-1,2c-1.257,0.65-2.071,1.089-3,2c-33.814-3.319-75.618,0.245-109-1
              c-12.167-0.454-24.647,1.357-34,0c-3.019-0.438-5.527,1.333-9,1c-9.312-0.894-26.242,0.452-36-1c-8.33-1.239-15.732,1.054-23,1
              c-22.809-0.169-34.868-0.357-57-1c-12.059-0.351-21.63,1.657-30,0c-3.33-0.659-7.169,0.961-9,1c-8.38,0.179-17.514,0.477-27,0
              c-22.454-1.129-58.021,1.855-78-1c-11.855-1.694-19.742,6.749-32,7c-5.305-7.887-11.182-4.076-22-6c-11.618-2.066-26.866,1.48-43,0
              c-15.136-1.389-31.479-0.64-45-1c-5,0.333-10,0.667-15,1c-11.529-2.246-35.05-1.45-44,0c-14.281,2.314-25.438-2.393-40-1
              c-6.894,0.659-29.152-1.039-38,0c-5.693,0.668-11.889,1.977-18,1c-22.613-3.613-47.062,2.038-68,0c-10.945-1.065-30.519-1.062-43,0
              c-6.487,0.552-14.584-2.117-19,0c-12.047-0.999-22.316-2.354-32,0c-5.136,1.249-5.492,4.563-10,6c-5.404,1.723-10.893-3.699-14-5
              c-4.219-1.767-15.605-1.657-22-2c-3.364,1.831-10.528-0.431-15,0c-13.908,1.339-33.324-1.542-51,0c-21.295,1.857-52.616,1.957-73,0
              c-10.39-0.998-24.52,3.767-32,0c-15.678,1.366-34.911-0.237-49,1c-5.747,0.504-12.106-1.261-14-1c-10.668,1.471-16.561-0.859-25,0
              c-9.107,0.927-19.103,1.198-26,0c-9.524-1.654-18.503,1.777-28,1c-21.498-1.759-42.332-0.027-64-1c-11.879-0.533-17.61,2.3-30,0
              c-0.506-3.188-0.872-2.919-2-5c0.667,0,1.333,0,2,0c8.819-5.337,20.123-0.216,20-15c1.783-3.792-1.093-15.484-2-20
              c1.821-5.715-3.356-59.247-7-72c-2.333-5.333-4.667-10.667-7-16c-0.472-11.75,1.133-21.287,2-27c0.569-3.75-0.716-8.145-1-12
              c-0.888-12.046,1.058-21.905,0-37c-1.511-21.558,6.079-46.389,12-69c0,0-4.487-11.503-5-13c-2.351-6.854-3.62-22.541-3-27
              c0.909-6.541-1.17-9.703-1-15c0.412-12.861,0.306-32.519,3-45c2.943-13.634-1.553-31.648,12-33c3.036-1.734,12.155,0.846,21-1
              c12.961-2.705,28.801,2.089,50-1c22.309-3.251,53.543,3.296,77-1C517.787,526.574,543.135,531.939,551,527z"></path>
          </g>
        <g fill="url(#img2)" fill-rule="evenodd" clip-rule="evenodd" stroke="none" stroke-miterlimit="10">
            <path fill-rule="evenodd" clip-rule="evenodd" stroke="#000000" stroke-miterlimit="10" d="M1771,899
              c3.549-0.245,6.524-1.59,9-2c3.333,0.333,6.667,0.667,10,1c5.355-0.826,23.518-0.108,38,1c5.874,0.45,32.545,0.569,40-1
              c2.71-0.57,4.664-2.701,8-2c7.173,1.508,13.629,5.765,20,10c3.055,2.031,6.893,3.195,9,6c10.232,13.619,15.486,52.089,13,71
              c-1.667,12.675,2.458,29.057-1,52c-5.773,38.297,0.68,88.478-8,131c-0.435,2.128,0.971,8.077,1,10c0.001,0.067-1.965,5.842-2,6
              c-2.689,12.068-0.331,26.308-2,34c-4.156,19.156-2.168,48.401-5,62c-1.877,9.014,1.213,16.44-2,20c-1.499,2.273-3.307,3.902-6,5
              c-4.564,2.516-13.135-0.547-20,0c-14.351,1.145-46.394,0.6-67,1c-9.091,0.177-17.878-2.416-27,0c-5.754-2.417-6.509-5.131-12-7
              c0.352,2.095,0.154,2.297,0,6c-4.955-0.356-10.621,1.442-17,1c-10.92-0.757-24.015-1.281-32,0c-11.649,1.869-23.825-1.399-31,0
              c-6.786,1.323-11.667-0.867-15-1c-10.208-0.406-18.802,1.359-27,1c-4.515-0.198-10.664-1.588-17-1c-13.92,1.291-32.299,1.74-45,0
              c-2.243-0.307-9.5,0.852-11,1c-10.152,1.003-27.521,0.069-35-1c-5.971-0.854-15.475,0.742-20,1c-10.292,0.588-25.537,0.768-37-1
              c-2.667,0.333-5.333,0.667-8,1c-10.746-1.359-21.857,0.26-31-1c-10.131-1.396-16.432,1.401-25,1c-19.017-0.89-40.869-0.268-63-1
              c-6.311-0.208-14.957-0.625-22,0c-1.471,0.131-3.245,1.436-6,1c-10.317-1.632-24.258,1.148-38-1c-3.371-0.527-5.169,2.005-11,1
              c-5.428-0.936-20.452-0.779-30,0c-4.473,0.365-11.985-0.788-18-1c-13.55-0.478-23.894,1.617-36,0c-4.9-0.655-7.901,2.106-14,1
              c-16.542-3.001-32.105,1.053-45-1c-4.465-0.711-5.876,0.701-8,1c-9.981,1.404-19.561-0.5-23-1c-5.162-0.75-11.474,1.311-17,1
              c-15-0.844-34.677,1.21-47-1c-4.217-0.756-9.854,1.934-17,1c-12.315-1.609-31.556-1.555-41,0c-5.41,0.891-8.846-0.851-13-1
              c-7.022-0.252-19.467,0.038-25,1c-9.132,1.587-13.73-1.376-22-1c-25.858,1.176-45.312,0.883-75,0c-15.029-0.447-25.027,2.053-42,1
              c-26.058-1.616-67.745,1.854-96-1c-5.285-0.534-16.46,0.315-21,1c-7.323,1.104-11.23-1.993-18-1c-2.162,0.317-7.25,1.516-11,1
              c-12.875-1.771-21.785,1.954-38,0c-11.305-1.362-32.192-0.551-44,0c-6.311,0.295-18.546-1.74-26-1c-7.062,0.701-20.875,2.131-32,1
              c-13.41-1.364-26.984,1.061-41,0c-6.643-0.503-18.748-1.645-30-1c-8.291,0.476-18.811,2.158-32,0c-7.045-1.153-17.719,1.99-29,1
              c-10.353-0.909-31.427-2.439-46,0c-2.641,0.442-6.189-0.893-9-1c-6.593-0.251-18.649,1.095-30,0c-2.603-0.251-9.919,0.933-15,1
              c-16.033,0.212-30.909-0.449-49-1c-0.451-2.121-0.896-3.647-2-5c-9.307,8.841-20.473,2.975-33,5c-5.723,0.925-17.339,1.099-24,0
              c-5.606-0.925-11.017,1.751-20,1c-17.658-1.477-31.363-1.497-47,0c-2.137-5.085-5.494-3.486-6-11c-3.94-6.654-0.06-19.357-2-29
              c-1.115-5.541-1.22-15.848-3-24c-0.671-3.072,1.198-10.325,0-16c-3.166-14.994-4.318-34.246-4-54c0.126-7.85-3.111-16.104-2-23
              c0.725-4.497-1.055-13.135-2-17c-1.617-6.616-0.708-17.761,0-22c1.158-6.938-1.568-18.377-1-22c0.27-1.72-1.641-10.252-2-12
              c-0.623-3.035-0.361-25.955,0-29c0.59-4.978-1.095-18.047-2-23c-0.892-4.879,0.509-19.743,1-23c0.647-4.293-1.529-11.181-1-17
              c1.622-17.861-0.703-47.63,10-62c0.741-0.996,1.457-6.827,4-9c6.478-5.534,15.838-12.763,26-14c3.028-0.369,16.247,3.288,24,2
              c20.334-3.376,45.817-1.074,75-1c8.515,14.992,6.013,35.236,19,44c8.975,6.927,41.481,3.999,54,0c4.293-1.372,12.443-4.577,16-4
              c6.639,1.076,19.179-8.275,23-5c1.591,1.281,2.809,3.396,4,5c-19.545,0.57-43.982,9.225-53,12c-17.208,5.295-35.986,4.474-48,15
              c-18.042,15.808-18.947,37.747-18,61c0.49,12.032-2.344,23.081-1,32c3.062,20.312,2.715,25.66,4,45c8.472,3.607,10.651,4.128,24,4
              c7.744,3.431,22.8-1.823,32,0c17.185,3.405,40.387-3.876,69,0c17.927,2.429,40.698-3.991,67,0c17.534,2.661,43.119-3.263,73,0
              c30.782,3.361,71.759-4.395,112,0c12.18,1.33,31.636,1.437,45,0c7.758-0.834,14.769,0.859,19,1c13.216,0.439,25.759-1.207,34,0
              c4.002,0.586,11.532-0.902,13-1c7.462-0.498,18.106,0.575,23,1c7.364,0.64,17.885-1.413,26-1c54.369,2.765,146.981-1.229,231,1
              c1.091,0.029,7.738-1.956,9-2c1.754-0.061,10.188,1.699,12,2c9.235,1.537,26.043-2.521,40-1c14.376,1.567,28.517-1.31,43,0
              c7.108,0.643,24.857,0.902,30,0c16.46-2.887,34.35,1.854,45,0c5.931-1.033,10.043,0.81,15,1c12.431,0.478,35.937,0.497,45-1
              c6.666,0.333,13.334,0.667,20,1c18.01-0.152,23.53-1.675,38-1c7.494,0.35,16.747,1.099,23,0c7.947-1.396,12.337,0.153,18,1
              c4.448,0.666,6.357-1.02,12-1c14.056,0.048,36.29,1.568,45,0c10.521-1.894,16.778,1.11,23,0c9.819-1.751,19.246-0.214,27,1
              c9.743,1.525,26.958-1.869,39,0c2.284,0.354,9.956-1.023,14-1c19.761,0.113,41.853-2.465,65,0c13.086,1.394,28.477-0.88,45,0
              c9.772,0.521,23.346,1.189,30,0c23.111-4.131,43.779,2.465,57,0c21.846-4.073,59.28,2.527,74,0c7.81-1.341,11.328,1.08,15-4
              c5.586-7.162,4.622-38.437,4-46c-2.176-26.47,5.197-54.153-3-73c-12.922-29.711-56.241-31.654-84-40
              c-10.585-3.183-25.459-3.067-31-7c2.951-1.106,2.661-1.489,4-4c17.62,5.985,37.328,9.54,54,13c9.36,1.943,19.678-1.567,31-2
              c1.45-1.867,3.446-1.42,5-3C1763.92,933.965,1768.681,910.63,1771,899z"></path>
          </g>
        <g fill="url(#img1)" fill-rule="evenodd" clip-rule="evenodd" stroke="none" stroke-miterlimit="10">
            <path fill-rule="evenodd" clip-rule="evenodd" stroke="#000000" stroke-miterlimit="10" d="M287,755
              c15.874,1.797,35.658,1.71,57,3c0,0.667,0,1.333,0,2c2.484,4.891-0.129,12.965,0,18c0.216,8.468-1.072,16.496-1,32
              c0.012,2.521,4.064,7.078,5,9c2.69,5.521,3.715,15.488,5,21c2.288,9.814-0.736,21.973,2,34c3.9,17.14,4.24,28.36,4,50
              c-22.613,13.643-66.825,17.244-88,22c-9.755,2.191-21.977-1.478-28-4c-5.599-9.908-8.378-14.85-12-26c-1.813-5.581-1.21-15.596-6-18
              c-6,0-12,0-18,0c-5.134-2.855-22,1.921-32,1c-3.985-0.367-16.85-2.5-25-1c-3.044,0.561-12.341,1.117-18,0
              c-3.019-0.596-16.575-0.486-22-4c-5.983-3.875-10.887-10.473-17-14c-1.095-11.534-0.625-19.672-2-27c-0.49-2.609,2.336-9.405,1-11
              c5.011-4.595,7.352-8.811,13-12c7.972-4.502,21.064-5.014,25-5c6.111,0.021,17.417-2.507,24-4c6.169-1.399,13.477-0.014,18,0l4-2
              c3.509-0.794,4.389,0.972,7,1c4.806,0.053,10.73-1.423,15-2c11.901-20.843,26.479-45.126,50-57c4.675-2.36,17.267-3.549,23-5
              C272.311,755.668,282.682,757.822,287,755z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" stroke="#000000" stroke-miterlimit="10" d="M1771,899
              c-2.3,13.766-7.943,44.433-24,45c-6.891,4.642-24.663,0.863-31,0c-24.402-3.322-51.711-12.146-76-18c0.139-3.291-2.119-13.863-1-19
              c3.643-16.721,3.326-26.707,5-38c1.3-8.771-1.506-18.504,1-28c2.593-9.828,2.978-18.558,7-26c1.96-3.627,7.702-7.137,9-11
              c1.206-3.589-0.763-5.721-1-8c-1.372-13.199,0.285-27.02,0-38c1.725-0.599,3.152-0.89,6-1c4.633-2.995,19.423-0.504,24-1
              c16.518-1.791,64.35-0.943,79,17c9.034,11.064,15.802,20.45,24,32c4.961,6.99,2.635,12.904,15,13c6.328,3.935,19.531,0.773,29,3
              c20.746,4.88,67.561,0.372,69,26c2.686,6.175-0.598,26.999-1,33c-4.171,2.133-4.773,5.433-8,8c-5.427,4.318-14.302,7.667-20,9
              c-12.167,2.847-46.904,2.391-63,0c-1.667-0.248-7.626,1.189-11,1C1793.267,897.454,1785.997,897.935,1771,899z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" stroke="#000000" stroke-miterlimit="10" d="M346,937
                c9.071,2.764,17.945-0.38,29,0c17.269,0.594,39.164-1.059,58,1c13.648,1.492,25.886-2.674,38-1c10.451,1.444,29.966,1.923,43,0
                c2.587-0.382,13.616,0.905,15,1c14.965,1.031,31.255,0.052,46-1c4.413-0.314,15.066,0.382,21,1c11.943,1.244,23.278-1.643,34,0
                c11.097,1.7,19.098-2.906,31-1c10.094,1.617,21.553,1.646,31,0c5.728-0.998,9.723,0.833,13,1c12.572,0.639,30.307,0.786,41-1
                c14.753-2.464,24.592,6.307,35,8c17.75-15.658,58.194-3.915,85-7c13.511-1.555,39.623-2.385,57,0c5.664,0.777,12.037-1.694,17-1
                c9.338,1.307,13.908-0.937,22,0c12.005,1.389,17.904,1.36,32,1c3.691-0.094,7.938-1.352,12-1c19.14,1.657,47.29,0.244,63,0
                c19.347-0.3,44.321,1.601,60,0c10.175-1.039,18.525,1.993,27,1c8.203-0.961,19.34-1.93,28-1c2.336,0.251,8.502,1.805,12,0
                c5.993,0.396,16.106,0.051,20,3c3.783,2.865,1.383,4.681,9,5c7.806-8.499,21.811-5.863,31-7c7.756-0.96,22.092-0.707,32-1
                c5.025-0.148,7.288,1.42,11,1c19.889-2.251,41.359-1.395,67,0c7.873-4.052,22.892,2.651,38,0c19.499-3.421,45.048,2.146,70-1
                c5.515-0.695,10.751,2.534,20,1c7.209-1.196,15.412,1.44,25,0c9.259-1.391,27.019-0.836,38,0c20.522,1.562,39.999-3.093,59,0
                c5.741,0.935,9.563-0.417,14-1c6.527-0.858,7.721,0.869,11,1c11.653,0.466,23.902-1.249,36,3c28.851,10.134,71.615,8.413,92,29
                c10.531,10.636,15.833,39.319,14,60c-0.555,6.262-2.77,20.831-2,27c1.431,11.479,1.066,34.545-4,47c-18.662,10.263-61.075-2.08-89,3
                c-13.261,2.413-33.795-4.013-57,0c-12.281,2.124-31.007-3.2-49,0c-14.491,2.577-37.436-4.17-62,0c-8.449,1.435-22.939-0.004-33,0
                c-29.675,0.012-61.07-1.452-86,1c-18.853,1.854-40.047-4.752-62-1c-6.304,1.077-14.77,0.04-23,0c-15.22-0.074-34.134,2.338-47,1
                c-6.086-0.633-19.687-1.607-28-1c-36.52,2.666-82.496-2.611-121,1c-12.86,1.206-34.863-4.38-44,0c-31.437-2.493-70.05-3.612-98,0
                c-2.688,0.348-14.925-0.846-16-1c-17.359-2.488-34.088,1.521-44,0c-5.716-0.877-14.037,1.439-18,1c-8.744-0.969-23.711-2.852-34-1
                c-5.874,1.057-16.682,0.54-26,0c-13.95-0.808-26.467-0.536-42,1c-13.805,1.366-25.729-2.205-38,0c-2.544,0.457-4.863-1.116-6-1
                c-12.492,1.274-19.28,0.781-29,1c-0.468-0.248-6.791-1.528-10-1c-24.706,4.066-69.637-2.429-105,1c-8.462,0.82-27.257-3.111-33,0
                c-7.074-0.854-19.375-2.48-28-1c-4.59,0.788-13.407-0.172-20,0c-19.121,0.499-34.337-1.522-59,1c-8.25,0.844-15.609-2.687-25-1
                c-15.297,2.747-37.313-3.969-61,0c-17.337,2.905-37.829-1.518-62,1c-2.528,0.264-8.772-1.721-13-1c-4.927,0.84-15.394-0.875-21,0
                c-15.956,2.492-34.176-0.017-58,0c-2.392-3.119-4.317-2.749-5-8c-6.569-9.878-0.052-24.645-3-41c-1.659-9.206-2.52-40.592,0-54
                c1.33-7.078,1.873-18.546,4-22c4.823-7.833,12.634-15.647,20-21c7.919-5.755,20.466-4.579,31-8c15.935-5.175,24.16-5.897,39-11
                C325.999,940.333,336.001,938.667,346,937z"></path>
          </g>
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
             width="2000px" height="2000px" version="1.1"
             style="max-height: 160px;max-width: 100%; shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
             viewBox="0 0 2000 2000"
             xmlns:xlink="http://www.w3.org/1999/xlink" class='shadow'>
            <defs>
              <clipPath id="id0">
                <rect width="2000" height="2000"/>
              </clipPath>
            </defs>
          <g id="Слой_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"/>
            <g style="clip-path:url(#id0)">
                <image x="0" y="0" width="2000" height="2000" xlink:href="/img/10033.png"/>
              </g>
            </g>
          </svg>
        </svg>
      <div class="sofa-filter__results">
        <div class="sofa-filter__product-name">{{ selectProduct.name }}</div>
        <div class="sofa-filter__product-size">{{ selectProduct.size }}</div>
        <div class="sofa-filter__product-price" v-model="finalPrice">
          <div class="sofa-filter__product-title">Цена:</div>
          {{ finalPrice }}
          руб.
        </div>
        <a
                class="sofa-filter__btn"
                href="#"
                @click="createOrder()"
        >ОФОРМЛЕНИЕ ЗАКАЗА</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['selectProduct', 'palettes'],
    data() {
      return {
        currentType: 'all',
        mainColor: true,
        selectMainColor: {
          type: '',
          collection: '',
          color: '',
          pic: '',
          price: '0'
        },
        selectCompanionColor: {
          type: '',
          collection: '',
          color: '',
          pic: '',
          price: '0'
        }
      }
    },
    computed: {
      showTypes: function () {
        for (let key in this.palettes) {
          if (this.currentType === 'all') {
            let allTypes = {
              collections: []
            };
            for (let prop in this.palettes) {
              allTypes.collections.push(...this.palettes[prop].collections);
            }
            return allTypes;
          } else if (key === this.currentType) {
            return this.palettes[key]
          }
        }
      },
      finalPrice: function () {
        let price = this.selectProduct.price;
        let basePrice = this.selectProduct.price;
        let mainColorPrice = this.selectMainColor.price;
        let companionColorPrice = this.selectCompanionColor.price;

        if (mainColorPrice > 0 || companionColorPrice > 0) {
          price = Math.max(basePrice, mainColorPrice, companionColorPrice);
        }

        return price;
      },
      showSelectColor: function () {
        let selected = {
          collection: '',
          color: ''
        }
        if (this.mainColor) {
          selected.collection = this.selectProduct.selectMainColor.collection;
          selected.color = this.selectProduct.selectMainColor.color;
        } else {
          selected.collection = this.selectProduct.selectCompanionColor.collection;
          selected.color = this.selectProduct.selectCompanionColor.color;
        }
        return selected;
      }
    },
    methods: {
      changeColor: function (type, collection, color, price, pic) {
        if (this.mainColor) {
          this.selectMainColor.type = type;
          this.selectMainColor.collection = collection;
          this.selectMainColor.color = color;
          this.selectMainColor.price = price;
          this.selectMainColor.pic = pic;
          this.$store.commit('updateMainColor', this.selectMainColor);
        } else {
          this.selectCompanionColor.type = type;
          this.selectCompanionColor.collection = collection;
          this.selectCompanionColor.color = color;
          this.selectCompanionColor.price = price;
          this.selectCompanionColor.pic = pic;
          this.$store.commit('updateCompanionColor', this.selectCompanionColor);
        }
      },
      createOrder: function () {
        this.$emit('next');
        this.$store.commit('addToBasket', this.finalPrice);
      }
    }
  }
</script>

<style scoped lang="scss">
  .sofa-filter {
    width: 100%;
    display: grid;
    grid-template-columns: auto 40%;
    grid-template-areas: 'left right';

    &__left {
      padding-right: 30px;
    }

    &__options {
      padding: 20px 0;

      &-title {
        margin-right: 20px;
      }
    }

    &__label {
      margin-right: 15px;
      display: inline-flex;
      align-items: center;
    }

    &__collections {
      &-wrap {
        position: relative;
        margin: 0;
        height: 33vh;
        padding-bottom: 20px;
      }
    }

    &__collection {
      &:not(:last-of-type) {
        margin-bottom: 20px;
      }

      &-info {
        &-top {
          display: flex;
          align-items: center;

          .name {
            color: #2d3439;
            font-size: 14px;
            font-weight: 400;
          }

          .price {
            color: #a6314b;
            font-size: 18px;
            font-weight: 400;
            padding-left: 15px;
          }
        }

        &-bottom {
          color: #6d777f;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: .5px;
        }
      }

      &-colors {
        display: flex;
        flex-wrap: wrap;
      }

      &-color-wrap {
        display: inline-block;
        width: 64px;
        height: 64px;
        overflow: hidden;
        border: 5px solid transparent;
        margin: 0;
        padding: 0;
        border-radius: 50%;

        &.active {
          border: 5px solid #65cce7;
        }
      }
    }

    &__parts {
      display: flex;

      &-item {
        display: flex;
        align-items: center;
        padding: 15px;
        margin-bottom: 20px;
        opacity: .5;
        cursor: pointer;
        width: 50%;

        .sofa-filter__collection-color-wrap {
          margin-right: 10px;
          border: 4px solid #e8e8e8;
        }

        &.active {
          background-color: rgba(237, 241, 242, .5);
          opacity: 1;

          .sofa-filter__collection-color-wrap {
            border: 4px solid #65cce7;
          }
        }

        .info {
          color: #9da7af;
          font-size: 11px;
          font-weight: 500;
        }

        .name {
          color: #2d3439;
          font-size: 13px;
          font-weight: 600;
        }

        .material {
          color: #9da7af;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: .45px;
        }
      }
    }

    &__product {
      &-name {
        font-size: 22px;
        line-height: 24px;
      }

      &-size {
        color: #2d3439;
        font-size: 15px;
        font-weight: 500;
        margin: 20px 0;
      }

      &-price {
        color: #111;
        font-size: 30px;
        font-weight: 700;
      }

      &-title {
        color: #5e6972;
        font-size: 12px;
        font-weight: 400;
      }
    }

    &__results {
      margin-top: -60px;
    }
  }
</style>
