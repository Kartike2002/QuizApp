import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="flex-1 p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
      </main>
    </div>
  );
}
