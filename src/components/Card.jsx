// Card based on `Discord Profile Card`
// Change the sizing by w-[`size`px] h-[`size`px]

// Original Card without Banner Image

// const Card = ({ children }) => (
//     <div className="relative bg-gradient-to-b from-black to-cyan-500 rounded-lg shadow-xl p-8 w-[400px] h-[600px] flex items-center justify-center">

//       {children}
//     </div>
//   );
  
// export default Card;


// Card with Banner Image & Desc below

const Card = ({ children, bannerImage }) => (
    <div className="relative bg-gradient-to-b from-black to-cyan-500 rounded-lg shadow-xl p-8 w-[400px] h-[600px] flex flex-col items-center justify-center">
        <div className="absolute inset-1.5 bg-black bg-opacity-40 rounded-lg">
            <div className="absolute top-0 left-0 w-full h-1/5 rounded-t-lg" 
                style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-4/5 rounded-t-lg">
                {children}
            </div>
        </div>
    </div>
);

export default Card;