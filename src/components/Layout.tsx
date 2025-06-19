
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'الرئيسية', href: '/', icon: 'fas fa-home' },
    { name: 'الأعضاء', href: '/members', icon: 'fas fa-users' },
    { name: 'الأنشطة', href: '/activities', icon: 'fas fa-heart' },
    { name: 'التبرع', href: '/donate', icon: 'fas fa-hand-holding-heart' },
    { name: 'اتصل بنا', href: '/contact', icon: 'fas fa-phone' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 space-x-reverse">
              <img src="src/components/wh.jpg" alt="Logo" className="w-28 h-16" />
              <div className="arabic-heading">
                <h1 className="text-xl font-bold text-primary">جمعية غرباء</h1>
                <p className="text-xs text-gray-600">للأعمال الخيرية</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 space-x-reverse">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg transition-all duration-300 arabic-text ${
                    isActive(item.href)
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  <i className={`${item.icon} text-sm`}></i>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/905550208605?text=مرحباً، أرغب في معرفة المزيد عن جمعية غرباء"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 space-x-reverse bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 charity-button"
            >
              <i className="fab fa-whatsapp text-lg"></i>
              <span className="arabic-text font-medium">واتساب</span>
            </a>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg transition-all duration-300 arabic-text ${
                      isActive(item.href)
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-primary/10'
                    }`}
                  >
                    <i className={`${item.icon} text-sm`}></i>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
                <a
                  href="https://wa.me/905550208605?text=مرحباً، أرغب في معرفة المزيد عن جمعية غرباء"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 space-x-reverse bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 mt-2"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  <span className="arabic-text font-medium">تواصل عبر واتساب</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <i className="fas fa-mosque text-white text-sm"></i>
                </div>
                <h3 className="text-xl font-bold arabic-heading">جمعية غرباء للأعمال الخيرية</h3>
              </div>
              <p className="arabic-text text-gray-300 leading-relaxed mb-4">
                منظمة خيرية تهدف إلى دعم ومساعدة أهل غزة في محنتهم، من خلال تقديم المساعدات الإنسانية والدعم المعنوي والمادي للأسر المحتاجة.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://wa.me/905550208605" className="text-green-400 hover:text-green-300 transition-colors">
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold arabic-heading mb-4">روابط سريعة</h4>
              <ul className="space-y-2 arabic-text">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold arabic-heading mb-4">تواصل معنا</h4>
              <div className="space-y-3 arabic-text text-gray-300">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <i className="fas fa-phone text-primary"></i>
                  <span>+90 555 020 8605</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <i className="fas fa-envelope text-primary"></i>
                  <span>ghurabaacharity@yahoo.com</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  <span>إسطنبول، تركيا</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center arabic-text text-gray-400">
            <p>&copy; 2025 جمعية غرباء للأعمال الخيرية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
