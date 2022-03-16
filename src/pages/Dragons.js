const URL = 'https://api.spacexdata.com/v3/dragons';

const showAPI = (data) => {
  console.log(data);
};

const getDragons = () => {
  fetch(URL)
    .then((resolve) => resolve.json())
    .then((data) => {
      showAPI(data);
    });
};

const Dragons = () => (
  <>
    <h2>
      Dragons

    </h2>
    <button
      type="button"
      onClick={() => {
        getDragons();
      }}
      value="fetch"
    >
      Fetch
    </button>
  </>
);

export default Dragons;
