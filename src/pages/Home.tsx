import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { number: '8+', label: 'مستفيد', icon: 'fas fa-users' },
    { number: '50+', label: 'عضو نشط', icon: 'fas fa-user-friends' },
    { number: '1+', label: 'مشروع', icon: 'fas fa-heart' },
    // { number: '1', label: 'سنوات خبرة', icon: 'fas fa-calendar' },
  ];

  const activities = [
    // {
    //   title: 'توزيع الطعام',
    //   description: 'توزيع وجبات طعام ساخنة للعائلات المحتاجة في غزة',
    //   image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop',
    //   icon: 'fas fa-utensils',
    //   date: '15 ديسمبر 2024'
    // },
    // {
    //   title: 'كسوة الشتاء',
    //   description: 'توزيع ملابس شتوية دافئة للأطفال والكبار',
    //   image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=250&fit=crop',
    //   icon: 'fas fa-tshirt',
    //   date: '10 ديسمبر 2024'
    // },
    // {
    //   title: 'المساعدات الطبية',
    //   description: 'توفير الأدوية والمستلزمات الطبية الضرورية',
    //   image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
    //   icon: 'fas fa-pills',
    //   date: '5 ديسمبر 2024'
    // },
  ];

  const testimonials = [
    {
      name: 'أم محمد',
      text: 'جزاكم الله خيراً على ما تقدمونه من مساعدة، لقد كنتم عوناً لنا في أصعب الأوقات',
      location: 'غزة'
    },
    {
      name: 'أحمد الفلسطيني',
      text: 'المجموعة تقوم بعمل رائع ومنظم، نشعر بالأمان والاطمئنان عندما نتعامل معهم',
      location: 'غزة'
    },
    {
      name: 'فاطمة عبدالله',
      text: 'شكراً لكم على اهتمامكم وحرصكم على وصول المساعدة لمن يستحقها فعلاً',
      location: 'رفح'
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold arabic-heading mb-6 animate-fade-in">
            مجموعة غرباء
          </h1>
          <h2 className="text-2xl md:text-4xl arabic-heading mb-8 animate-fade-in">
            للأعمال الخيرية
          </h2>
          <p className="text-xl md:text-2xl arabic-text leading-relaxed mb-12 animate-slide-up">
            نمد يد العون لأهل غزة في محنتهم، ونقف معهم بالدعم المادي والمعنوي 
            <br />
            لنكون سنداً لهم في أصعب الأوقات
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            {/* <Link to="/donate">
              <Button className="charity-button-primary text-xl px-8 py-4 min-w-[200px]">
                <i className="fas fa-hand-holding-heart ml-2"></i>
                تبرع الآن
              </Button>
            </Link> */}
            <Link to="/activities">
              <Button className="charity-button-secondary text-xl px-8 py-4 min-w-[200px]">
                <i className="fas fa-eye ml-2"></i>
                شاهد أنشطتنا
              </Button>
            </Link>
          </div>
          
          <div className="mt-12">
            <a
              href="https://wa.me/905550208605?text=مرحباً، أرغب في الانضمام كعضو في مجموعة غرباء"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 space-x-reverse bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all duration-300 charity-button arabic-text"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span>اشترك شهرياً</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold arabic-heading text-primary mb-8">
            رسالتنا
          </h2>
          <div className="text-xl arabic-text leading-relaxed text-gray-700 mb-8">
  {/* Title Section */}
  <div className="text-2xl font-bold text-blue-800 mb-6 text-center border-b-2 border-blue-200 pb-4">
    مجموعة: فطوبى للغرباء
  </div>

  {/* Introduction */}
  <div className="bg-blue-50 p-6 rounded-lg mb-6 border-r-4 border-blue-500">
    <p className="text-lg leading-relaxed mb-4">
      فكرة هذا المشروع المبارك أن يكون هناك تمويل قليل ودائم، يساهم فيه كل شخص بمبلغ بسيط يوميًا
    </p>
  </div>

  {/* Goals Section */}
  <div className="space-y-4 mb-8">
    <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-500">
      <span className="text-lg">💰 المساهمة اليومية: دولار واحد فقط (ما يعادل 30 دولار شهريًا)</span>
    </div>
    
    <div className="bg-yellow-50 p-4 rounded-lg border-r-4 border-yellow-500">
      <span className="text-lg">🎯 الهدف: الوصول إلى ألف مشترك بعون الله تعالى</span>
    </div>
    
    <div className="bg-purple-50 p-4 rounded-lg border-r-4 border-purple-500">
      <span className="text-lg">✨ المجموع المتوقع: 30 ألف دولار شهريًا</span>
    </div>
  </div>

  {/* Prayer */}
  <div className="text-center bg-gray-50 p-4 rounded-lg mb-8">
    <p className="text-lg text-gray-600 italic">
      نسأل الله التوفيق والسداد في بلوغ هذا الهدف
    </p>
  </div>

  {/* Success Secrets Title */}
  <div className="text-center mb-6">
    <h3 className="text-2xl font-bold text-orange-600 bg-orange-50 p-4 rounded-lg">
      أسرار النجاح الحقيقي في الدنيا والآخرة
    </h3>
  </div>

  {/* Divider */}
  <hr className="my-8 border-t-3 border-gradient-to-r from-blue-500 to-purple-500" />

  {/* Quran Verses */}
  <div className="charity-gradient text-white p-8 rounded-lg text-center shadow-lg">
    <div className="text-2xl leading-loose font-medium">
      <p className="mb-4">
        يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ هَلۡ أَدُلُّكُمۡ عَلَىٰ تِجَٰرَةٖ تُنجِيكُم مِّنۡ عَذَابٍ أَلِيمٖ 
        <span className="inline-block bg-white bg-opacity-20 rounded-full w-8 h-8 leading-8 text-sm mx-2">(10)</span>
      </p>
      
      <p className="mb-4">
        تُؤۡمِنُونَ بِٱللَّهِ وَرَسُولِهِۦ وَتُجَٰهِدُونَ فِي سَبِيلِ ٱللَّهِ بِأَمۡوَٰلِكُمۡ وَأَنفُسِكُمۡۚ ذَٰلِكُمۡ خَيۡرٞ لَّكُمۡ إِن كُنتُمۡ تَعۡلَمُونَ 
        <span className="inline-block bg-white bg-opacity-20 rounded-full w-8 h-8 leading-8 text-sm mx-2">(11)</span>
      </p>
      
      <p>
        يَغۡفِرۡ لَكُمۡ ذُنُوبَكُمۡ وَيُدۡخِلۡكُمۡ جَنَّٰتٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ وَمَسَٰكِنَ طَيِّبَةٗ فِي جَنَّٰتِ عَدۡنٖۚ ذَٰلِكَ ٱلۡفَوۡزُ ٱلۡعَظِيمُ
        <span className="inline-block bg-white bg-opacity-20 rounded-full w-8 h-8 leading-8 text-sm mx-2">(12)</span>
      </p>
    </div>
  </div>
</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="charity-card text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heart text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold arabic-heading text-primary mb-2">الرحمة</h3>
                <p className="arabic-text text-gray-600">نعمل بروح الرحمة والشفقة على إخواننا المحتاجين</p>
              </CardContent>
            </Card>
            
            <Card className="charity-card text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-hands-helping text-secondary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold arabic-heading text-secondary mb-2">التعاون</h3>
                <p className="arabic-text text-gray-600">نؤمن بقوة التعاون والعمل الجماعي لتحقيق أهدافنا</p>
              </CardContent>
            </Card>
            
            <Card className="charity-card text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-star text-accent text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold arabic-heading text-accent mb-2">التميز</h3>
                <p className="arabic-text text-gray-600">نسعى للتميز في تقديم خدماتنا وإيصال المساعدة</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold arabic-heading text-primary mb-4">
              شاهد أعمالنا
            </h2>
            <p className="text-xl arabic-text text-gray-600">
              تابع جهودنا في دعم أهل غزة من خلال هذا الفيديو التوضيحي
            </p>
          </div>
          
          <Card className="charity-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gray-100">
                <iframe
                  src="https://drive.google.com/file/d/1-hDoqJU_FKN8-xOTMoWjWPytgu2UPEn0/preview"
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  title="فيديو مجموعة غرباء للأعمال الخيرية"
                ></iframe>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold arabic-heading text-primary mb-3">
                  رحلة العطاء والإنسانية
                </h3>
                <p className="arabic-text text-gray-700 leading-relaxed mb-4">
                  شاهد كيف تصل مساعداتكم إلى المحتاجين في غزة، وتابع قصص الأمل والتضامن التي نسعى لتحقيقها معاً
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/activities">
                    <Button className="charity-button-primary">
                      <i className="fas fa-eye ml-2"></i>
                      شاهد المزيد من الأنشطة
                    </Button>
                  </Link>
                  <Link to="/donate">
                    <Button className="charity-button-secondary">
                      <i className="fas fa-hand-holding-heart ml-2"></i>
                      ساهم في المساعدة
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statistics */}
      <section className="charity-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold arabic-heading text-white mb-4">
              إنجازاتنا بالأرقام
            </h2>
            <p className="text-xl arabic-text text-white/90">
              نفخر بما حققناه من إنجازات في خدمة المجتمع
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-white text-2xl`}></i>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white arabic-heading mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 arabic-text font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Activities
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold arabic-heading text-primary mb-4">
            أحدث أنشطتنا
          </h2>
          <p className="text-xl arabic-text text-gray-600">
            تابع آخر المشاريع والأنشطة التي نقوم بها
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="charity-card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                  <i className={`${activity.icon} text-primary text-lg`}></i>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold arabic-heading text-primary">
                    {activity.title}
                  </h3>
                  <span className="text-sm text-gray-500 arabic-text">
                    {activity.date}
                  </span>
                </div>
                <p className="arabic-text text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/activities">
            <Button className="charity-button-primary text-lg px-8 py-3">
              <i className="fas fa-eye ml-2"></i>
              عرض جميع الأنشطة
            </Button>
          </Link>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold arabic-heading text-primary mb-4">
              شهادات المستفيدين
            </h2>
            <p className="text-xl arabic-text text-gray-600">
              آراء وشهادات من تلقوا مساعدتنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="charity-card p-6 text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-quote-right text-primary text-2xl"></i>
                  </div>
                  <p className="arabic-text text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-bold arabic-heading text-primary mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 arabic-text">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="charity-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold arabic-heading text-white mb-6">
            كن جزءاً من التغيير
          </h2>
          <p className="text-xl arabic-text text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            انضم إلينا في رحلة العطاء وساهم في تخفيف معاناة أهل غزة. 
            كل تبرع مهما كان صغيراً يصنع فرقاً في حياة شخص محتاج.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/donate">
              <Button className="bg-white text-primary hover:bg-gray-100 text-xl px-8 py-4 min-w-[200px] charity-button">
                <i className="fas fa-hand-holding-heart ml-2"></i>
                تبرع الآن
              </Button>
            </Link>
            <a
              href="https://wa.me/905550208605?text=مرحباً، أرغب في التطوع مع مجموعة غرباء"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl transition-all duration-300 charity-button text-xl min-w-[200px] inline-flex items-center justify-center"
            >
              <i className="fab fa-whatsapp ml-2"></i>
              تطوع معنا
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
