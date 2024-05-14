
import { useLocation, useNavigate } from "react-router-dom";

const GalleryCards = ({ handleGallery, openModal, setOpenModal, user }) => {

  return (
    <div
      className={`fixed flex justify-center items-center z-[100] ${
        openModal ? "visible opacity-1" : "invisible opacity-0"
      } duration-300 inset-0 w-full h-full`}
    >
      <div
        onClick={(e_) => e_.stopPropagation()}
        className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${
          openModal
            ? "translate-y-0 opacity-1 duration-300"
            : "translate-y-32 opacity-0 duration-100"
        }`}
      >
        <main className="px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="mr-0 mx-auto flex bg-[#AD1A19] text-white px-3 py-2 rounded-lg mb-6"
          >
            Close
          </button>
          <div className="">
            <div className="space-y-8 lg:mb-6">
              <div className="rounded-lg border w-full bg-card  shadow-sm">
                <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                  <h3 className="text-2xl font-semibold whitespace-nowrap text-center">
                    Gallery
                  </h3>
                </div>
                <div className="lg:p-6 p-2">
                  {/* Shipping Details form */}
                  <form onSubmit={handleGallery} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <input
                        className="bg-transparent flex h-10 w-full rounded-md border px-3"
                        defaultValue={user?.displayName}
                        placeholder="Enter your name"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Feedback</label>
                      <input
                        className="bg-transparent flex w-full rounded-md border px-3 h-20"
                        name="feedback"
                        type="text"
                        placeholder=".........."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Image URL</label>
                      <input
                        className="bg-transparent flex h-10 w-full rounded-md border px-3"
                        name="imageURL"
                        type="text"
                        placeholder=".........."
                      />
                    </div>
                    <div className="space-y-2">
                      <input
                        onClick={() => {
                          setOpenModal(false);
                        }}
                        className={`inline-flex items-center  text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#AD1A19] text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full`}
                        type="submit"
                        placeholder=".........."
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex items-center lg:p-6 p-2"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GalleryCards;
