import React from 'react'
import {  useSelector } from 'react-redux';


const WomensFashionSinglePage = () => {



const { womensFashionSingleProduct } = useSelector(state => state.womensFashion);

   
    

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <img style={{height : '500px', width : '300px'}} src={`/api/public/image/womensFashion/${womensFashionSingleProduct.photo}`} alt="" />
                        <div className="buttom mt-3">
                            <button className='btn btn-danger'>ADD TO CARD</button> &nbsp;
                            <button className='btn btn-primary'>BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-body">
                        <h3>{womensFashionSingleProduct.name}</h3>
                        <p>Sale price : $ {womensFashionSingleProduct.sale_price}</p>
                        <p>Regular price : $ <del>{womensFashionSingleProduct.regular_price}</del></p>
                        <p><strong>Description</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non nemo veritatis, eum nulla voluptate illum similique laboriosam aut, tempora quasi maiores voluptatum aperiam corrupti magnam hic sequi, nam repudiandae commodi eveniet sint? Rem magni tenetur esse voluptatem dolore quae minus consectetur sapiente expedita molestiae culpa totam ipsam ipsa voluptas repellat fugiat facilis obcaecati, praesentium harum fugit ipsum, accusantium laboriosam omnis? Quaerat quisquam at voluptatum incidunt facilis! Accusantium cupiditate corporis omnis unde modi quia consectetur enim illo natus ex recusandae perspiciatis asperiores, ut et maxime nam veniam quibusdam! Quidem, ipsa explicabo. Ea voluptatibus eaque et consectetur quaerat amet harum hic quis, assumenda beatae, sunt rerum. Aliquid delectus itaque quasi in corrupti tempore voluptatem quia explicabo! Perferendis et nesciunt placeat distinctio reprehenderit exercitationem voluptatum. Mollitia ratione nemo explicabo? Libero amet cum excepturi nisi commodi voluptatum ratione maxime, pariatur, ab recusandae sequi minus ipsum quisquam doloribus velit unde, fugiat ex porro asperiores illum. Cumque nam enim, at tenetur hic deleniti ipsum minima. Odio sunt doloribus minima tempora dolor fuga nihil eveniet aperiam neque qui. Eaque consequatur fugit nisi accusantium hic dolor, aspernatur corrupti? Dignissimos amet, facilis ea, minus quas doloremque quibusdam voluptate dolore expedita fuga accusantium laboriosam ipsam veniam error quod sed natus repudiandae, eveniet eos nostrum aliquam nihil debitis! Distinctio, fuga a ullam, mollitia repudiandae nulla eligendi eius soluta blanditiis, ex vero hic. Assumenda consectetur consequatur enim incidunt dolor. Necessitatibus alias, ut ratione aspernatur quia sed possimus neque, iste velit accusamus</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WomensFashionSinglePage;