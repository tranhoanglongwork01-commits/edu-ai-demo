import "./App.css";

function App() {

  return (
    <div className="app">

      <nav className="navbar">

        <div className="logo">
          🤖 EduAI
        </div>

        <div className="menu">
          <span>Trang chủ</span>
          <span>Tính năng</span>
          <span>Giải pháp</span>
          <span>Về chúng tôi</span>
        </div>

        <button>
          Dùng thử miễn phí
        </button>

      </nav>



      <section className="hero">

        <div className="hero-text">

          <div className="badge">
            ✨ AI dành cho giáo viên
          </div>


          <h1>
            Tạo bài giảng
            <br/>
            thông minh
            <br/>
            bằng AI
          </h1>


          <p>
            Biến tài liệu PDF, Word thành giáo án,
            sơ đồ tư duy và câu hỏi trắc nghiệm
            chỉ trong vài giây.
          </p>


          <button className="main-btn">
            🚀 Bắt đầu ngay
          </button>


          <div className="check">
            ✓ Không cần kỹ năng AI
            <br/>
            ✓ Tiết kiệm thời gian
            <br/>
            ✓ Hỗ trợ giáo viên
          </div>


        </div>




        <div className="ai-card">

          <div className="file">
            📄
            <span>Tài liệu</span>
          </div>


          <div className="arrow">
            ↓
          </div>


          <div className="robot">
            🤖
          </div>


          <div className="arrow">
            ↓
          </div>


          <div className="result">
            📚
            <span>Giáo án AI</span>
          </div>


        </div>


      </section>




      <section className="features">


        <h2>
          Công cụ AI mạnh mẽ
        </h2>


        <div className="cards">


          <div className="card">

            <div>
              📚
            </div>

            <h3>
              Giáo án AI
            </h3>

            <p>
              Tạo giáo án tự động từ tài liệu.
            </p>

          </div>



          <div className="card">

            <div>
              🧠
            </div>

            <h3>
              Mindmap AI
            </h3>

            <p>
              Biến nội dung thành sơ đồ tư duy.
            </p>

          </div>




          <div className="card">

            <div>
              📝
            </div>

            <h3>
              Quiz AI
            </h3>

            <p>
              Sinh câu hỏi trắc nghiệm nhanh.
            </p>

          </div>



        </div>


      </section>


    </div>
  )
}


export default App;