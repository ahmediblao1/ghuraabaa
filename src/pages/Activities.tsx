
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Activities = () => {
  const [selectedFilter, setSelectedFilter] = useState('الكل');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // const filters = ['الكل', 'الطعام', 'الكساء', 'المأوى', 'الطبية'];

  const activities = [
    // {
    //   id: 1,
    //   title: 'توزيع الوجبات  الساخنة',
    //   category: 'الطعام',
    //   date: ' مايو 2025',
    //   location: 'مخيم جباليا، غزة',
    //   beneficiaries: 250,
    //   description: 'توزيع وجبات إفطار ساخنة للأسر المحتاجة في مخيم جباليا، تضمنت الوجبات الفول والفلافل والخبز والشاي.',
    //   image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
    //   gallery: [
    //     '/images/102.jpg',
    //     '/images/101.jpg',
    //     'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop'
    //   ]
    // },
    // {
    //   id: 2,
    //   title: 'توزيع ملابس شتوية للأطفال',
    //   category: 'الكساء',
    //   date: '18 ديسمبر 2024',
    //   location: 'خانيونس، غزة',
    //   beneficiaries: 180,
    //   description: 'حملة توزيع ملابس شتوية دافئة للأطفال الذين تتراوح أعمارهم بين 3-15 سنة، شملت معاطف وبلوفرات وأحذية.',
    //   image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
    //   gallery: [
    //     'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    //     'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
    //     '/images/201.jpg',
    //   ]
    // },
    // {
    //   id: 3,
    //   title: 'توفير الأدوية الأساسية',
    //   category: 'الطبية',
    //   date: '15 ديسمبر 2024',
    //   location: 'رفح، غزة',
    //   beneficiaries: 120,
    //   description: 'توزيع أدوية أساسية للمرضى المزمنين وكبار السن، شملت أدوية السكري والضغط والقلب.',
    //   image:'/images/302.jpg',
    //   gallery: [
    //     'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    //     '/images/301.jpg',
    //     '/images/302.jpg',
    //   ]
    // },
   
    // {
    //   id: 5,
    //   title: 'حملة توزيع مواد غذائية',
    //   category: 'الطعام',
    //   date: '8 ديسمبر 2024',
    //   location: 'غزة المدينة',
    //   beneficiaries: 300,
    //   description: 'توزيع سلال غذائية شاملة تكفي لأسرة من 6 أفراد لمدة شهر، تضمنت الأرز والسكر والزيت والمعلبات.',
    //   image: 'https://images.unsplash.com/photo-1593113616828-6f22bce73819?w=600&h=400&fit=crop',
    //   gallery: [
    //     'https://images.unsplash.com/photo-1593113616828-6f22bce73819?w=400&h=300&fit=crop',
    //     'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    //     'https://images.unsplash.com/photo-1609501676725-7186f0a51972?w=400&h=300&fit=crop'
    //   ]
    // },
  ];

  const filteredActivities = selectedFilter === 'الكل' 
    ? activities 
    : activities.filter(activity => activity.category === selectedFilter);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold arabic-heading text-primary">
          أنشطتنا ومشاريعنا
        </h1>
        <p className="text-xl arabic-text text-gray-600 max-w-2xl mx-auto leading-relaxed">
          تابع جميع الأنشطة والمشاريع التي نقوم بها لدعم أهل غزة
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="charity-card text-center p-4">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary arabic-heading mb-1">
              {/* {activities.length} */}
              1
            </div>
            <div className="text-gray-600 arabic-text text-sm">مشروع منجز</div>
          </CardContent>
        </Card>
        
        <Card className="charity-card text-center p-4">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-secondary arabic-heading mb-1">
              {/* {activities.reduce((sum, activity) => sum + activity.beneficiaries, 0)} */}
              8
            </div>
            <div className="text-gray-600 arabic-text text-sm">مستفيد</div>
          </CardContent>
        </Card>
        
        {/* <Card className="charity-card text-center p-4">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-accent arabic-heading mb-1">
              {activities.filter(a => a.category === 'الطعام').length}
            </div>
            <div className="text-gray-600 arabic-text text-sm">مشروع غذائي</div>
          </CardContent>
        </Card>
        
        <Card className="charity-card text-center p-4">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-green-600 arabic-heading mb-1">
              {activities.filter(a => a.category === 'الطبية').length}
            </div>
            <div className="text-gray-600 arabic-text text-sm">مشروع طبي</div>
          </CardContent>
        </Card> */}
      </div>

      {/* Filters */}
      {/* <Card className="charity-card">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold arabic-heading text-primary mb-4">تصفية حسب النوع</h3>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                variant={selectedFilter === filter ? "default" : "outline"}
                className={`arabic-text transition-all duration-300 ${
                  selectedFilter === filter 
                    ? 'charity-button-primary' 
                    : 'hover:bg-primary/10'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card> */}

       {/* Video Section */}
           <section className="container mx-auto px-4 py-16">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold arabic-heading text-primary mb-4">
        شاهد أعمالنا
      </h2>
      <p className="text-xl arabic-text text-gray-600">
        تابع جهودنا في دعم أهل غزة 
      </p>
    </div>
    
    {/* Videos Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
      {/* Video 1 */}
      <Card className="charity-card overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-video bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/1-hDoqJU_FKN8-xOTMoWjWPytgu2UPEn0/preview"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="فيديو مجموعة غرباء للأعمال الخيرية - 1"
            ></iframe>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold arabic-heading text-primary mb-2">
              رحلة العطاء والإنسانية
            </h3>
            <p className="arabic-text text-gray-700 text-sm leading-relaxed">
              شاهد كيف تصل مساعداتكم إلى المحتاجين في غزة
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Video 2 - Replace with your second video URL */}
      <Card className="charity-card overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-video bg-gray-100">
            <iframe
              src="/images/gz2.MP4"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="فيديو مجموعة غرباء للأعمال الخيرية - 2"
            ></iframe>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold arabic-heading text-primary mb-2">
              قصص الأمل والتضامن
            </h3>
            <p className="arabic-text text-gray-700 text-sm leading-relaxed">
              تابع قصص الأمل والتضامن التي نسعى لتحقيقها معاً
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Video 3 - Replace with your third video URL */}
      {/* <Card className="charity-card overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-video bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/YOUR_THIRD_VIDEO_ID/preview"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="فيديو مجموعة غرباء للأعمال الخيرية - 3"
            ></iframe>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold arabic-heading text-primary mb-2">
              المساعدات الإنسانية
            </h3>
            <p className="arabic-text text-gray-700 text-sm leading-relaxed">
              شاهد توزيع المساعدات والدعم المقدم للأسر المحتاجة
            </p>
          </div>
        </CardContent>
      </Card> */}

      {/* Video 4 - Replace with your fourth video URL */}
      {/* <Card className="charity-card overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-video bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/YOUR_FOURTH_VIDEO_ID/preview"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="فيديو مجموعة غرباء للأعمال الخيرية - 4"
            ></iframe>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold arabic-heading text-primary mb-2">
              مبادرات التعليم
            </h3>
            <p className="arabic-text text-gray-700 text-sm leading-relaxed">
              دعم التعليم وتوفير المستلزمات المدرسية للأطفال
            </p>
          </div>
        </CardContent>
      </Card> */}

      {/* Video 5 - Replace with your fifth video URL */}
      {/* <Card className="charity-card overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-video bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/YOUR_FIFTH_VIDEO_ID/preview"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="فيديو مجموعة غرباء للأعمال الخيرية - 5"
            ></iframe>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold arabic-heading text-primary mb-2">
              الرعاية الصحية
            </h3>
            <p className="arabic-text text-gray-700 text-sm leading-relaxed">
              توفير الرعاية الصحية والدواء للمرضى والمحتاجين
            </p>
          </div>
        </CardContent>
      </Card> */}

      {/* Video 6 - Replace with your sixth video URL */}
      {/* <Card className="charity-card overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-video bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/YOUR_SIXTH_VIDEO_ID/preview"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="فيديو مجموعة غرباء للأعمال الخيرية - 6"
            ></iframe>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold arabic-heading text-primary mb-2">
              مشاريع الإغاثة
            </h3>
            <p className="arabic-text text-gray-700 text-sm leading-relaxed">
              مشاريع الإغاثة الطارئة وتوفير المأوى الآمن
            </p>
          </div>
        </CardContent>
      </Card> */}
    </div>

    {/* Action Buttons */}
    <div className="text-center">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        
        <Link to="/donate">
          <Button className="charity-button-secondary">
            <i className="fas fa-hand-holding-heart ml-2"></i>
            ساهم في المساعدة
          </Button>
        </Link>
      </div>
    </div>
    
  </div>
</section>

      {/* Activities Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredActivities.map((activity) => (
          <Card key={activity.id} className="charity-card overflow-hidden group">
            <div className="relative overflow-hidden">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                onClick={() => openLightbox(activity.image)}
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-xs font-semibold text-primary arabic-text">
                  {activity.category}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white rounded-lg px-3 py-1">
                <span className="text-xs arabic-text">{activity.date}</span>
              </div>
            </div>
            
            <CardContent className="p-6">
              <h3 className="text-xl font-bold arabic-heading text-primary mb-2">
                {activity.title}
              </h3>
              
              <div className="flex items-center space-x-2 space-x-reverse text-gray-600 mb-3">
                <i className="fas fa-map-marker-alt text-sm"></i>
                <span className="arabic-text text-sm">{activity.location}</span>
              </div>
              
              <p className="arabic-text text-gray-700 text-sm leading-relaxed mb-4">
                {activity.description}
              </p>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <i className="fas fa-users text-primary text-sm"></i>
                  <span className="arabic-text text-sm font-medium text-primary">
                    {activity.beneficiaries} مستفيد
                  </span>
                </div>
              </div>
               */}
              {/* Photo Gallery */}
              {/* <div className="grid grid-cols-3 gap-2">
                {activity.gallery.map((photo, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg">
                    <img
                      src={photo}
                      alt={`${activity.title} - صورة ${index + 1}`}
                      className="w-full h-16 object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openLightbox(photo)}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}

      {/* No Results */}
      {/* {filteredActivities.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-search text-gray-400 text-2xl"></i>
          </div>
          <p className="arabic-text text-gray-500 text-lg">لا توجد أنشطة في هذا التصنيف</p>
        </div>
      )} */}

      {/* Call to Action */}
      <Card className="charity-card bg-gradient-to-r from-primary to-accent text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold arabic-heading mb-4">
            ساهم في المزيد من المشاريع
          </h3>
          <p className="text-xl arabic-text mb-6 opacity-90">
            تبرعك يساعدنا على تنفيذ المزيد من المشاريع وخدمة عدد أكبر من المحتاجين
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="inline-flex items-center space-x-3 space-x-reverse bg-white text-primary px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 charity-button font-semibold"
            >
              <i className="fas fa-hand-holding-heart"></i>
              <span className="arabic-text">تبرع الآن</span>
            </a>
            <a
              href="https://wa.me/905550208605?text=مرحباً، أرغب في التطوع في المشاريع"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 space-x-reverse bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl transition-all duration-300 charity-button font-semibold"
            >
              <i className="fab fa-whatsapp"></i>
              <span className="arabic-text">تطوع معنا</span>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="معاينة الصورة"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;
