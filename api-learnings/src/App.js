import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true)

  const ProductData = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {

        setTimeout(() => {

          setLoading(false)
        }, [5000])
        setData(res)
        console.log(res)

      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    ProductData()
  }, [])

  return (
    <div className="App">
      {
        loading ? (
          <div className='Loader'>
            <h1>loading......</h1>
          </div>
        ) :
          (
            <>
              <div className='card-container'>

                {
                  data &&
                  data.map((item) => {
                    console.log(item)
                    return (
                      <>
                        <div  className='card'>
                          <p>

                            {item.id}
                          </p>
                          <p>

                            {item.title}
                          </p>
                          <p>

                            {item.description}
                          </p>
                          <p>
                            {item.price}
                          </p>
                        </div>

                      </>
                    )
                  })
                }
              </div>
            </>
          )

      }


    </div>
  );
}

export default App;
