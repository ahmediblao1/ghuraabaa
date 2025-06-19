
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'موضوع الرسالة مطلوب';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'نص الرسالة مطلوب';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Create WhatsApp message for contact form
      const whatsappMessage = `📧 رسالة جديدة من موقع جمعية غرباء
      
الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}
${formData.phone ? `الهاتف: ${formData.phone}` : ''}
الموضوع: ${formData.subject}

الرسالة:
${formData.message}`;

      // Send to WhatsApp
      const whatsappUrl = `https://wa.me/905550208605?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "تم إرسال رسالتك بنجاح! 📧",
        description: `شكراً ${formData.name}، سيتم الرد عليك في أقرب وقت ممكن عبر واتساب.`,
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-phone',
      title: 'الهاتف',
      details: ['+90 555 020 8605'],
      action: 'tel:+905550208605'
    },
    {
      icon: 'fas fa-envelope',
      title: 'البريد الإلكتروني',
      details: ['ghurabaacharity@yahoo.com'],
      action: 'mailto:ghurabaacharity@yahoo.com'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'العنوان',
      details: ['إسطنبول', 'تركيا'],
      action: ''
    },
    {
      icon: 'fas fa-clock',
      title: 'أوقات العمل',
      details: ['الإثنين - الجمعة: 9:00 - 18:00', 'السبت: 9:00 - 15:00'],
      action: ''
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook', name: 'فيسبوك', url: '#', color: 'bg-blue-600' },
    { icon: 'fab fa-twitter', name: 'تويتر', url: '#', color: 'bg-blue-400' },
    { icon: 'fab fa-instagram', name: 'إنستغرام', url: '#', color: 'bg-pink-600' },
    { icon: 'fab fa-whatsapp', name: 'واتساب', url: 'https://wa.me/905550208605', color: 'bg-green-600' },
    { icon: 'fab fa-telegram', name: 'تلغرام', url: '#', color: 'bg-blue-500' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold arabic-heading text-primary">
          تواصل معنا
        </h1>
        <p className="text-xl arabic-text text-gray-600 max-w-2xl mx-auto leading-relaxed">
          نحن هنا للإجابة على استفساراتك ومساعدتك في أي وقت
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="space-y-6">
          <Card className="charity-card">
            <CardHeader>
              <CardTitle className="arabic-heading text-primary flex items-center">
                <i className="fas fa-envelope ml-3"></i>
                إرسال رسالة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="arabic-text">الاسم الكامل *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="أدخل اسمك الكامل"
                    className={`arabic-text ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm arabic-text mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="arabic-text">البريد الإلكتروني *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="example@email.com"
                    className={`arabic-text ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm arabic-text mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="arabic-text">رقم الهاتف (اختياري)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+90 555 020 8605"
                    className="arabic-text"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="arabic-text">موضوع الرسالة *</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="أدخل موضوع رسالتك"
                    className={`arabic-text ${errors.subject ? 'border-red-500' : ''}`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm arabic-text mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <Label htmlFor="message" className="arabic-text">نص الرسالة *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="اكتب رسالتك هنا..."
                    className={`arabic-text resize-none ${errors.message ? 'border-red-500' : ''}`}
                    rows={6}
                  />
                  {errors.message && <p className="text-red-500 text-sm arabic-text mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full charity-button-primary text-lg py-4"
                >
                  <i className="fas fa-paper-plane ml-2"></i>
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <Card className="charity-card bg-gradient-to-r from-green-50 to-green-100">
            <CardHeader>
              <CardTitle className="arabic-heading text-green-800">تواصل سريع</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="arabic-text text-green-700 mb-4">
                للاستفسارات العاجلة أو المساعدة الفورية
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/905550208605?text=مرحباً، أحتاج مساعدة من جمعية غرباء"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 space-x-reverse bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-all duration-300 charity-button"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span className="arabic-text font-medium">واتساب</span>
                </a>
                <a
                  href="tel:+905550208605"
                  className="flex-1 inline-flex items-center justify-center space-x-2 space-x-reverse bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-all duration-300 charity-button"
                >
                  <i className="fas fa-phone"></i>
                  <span className="arabic-text font-medium">اتصال</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Contact Details */}
          <Card className="charity-card">
            <CardHeader>
              <CardTitle className="arabic-heading text-primary">معلومات التواصل</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${info.icon} text-primary`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold arabic-heading text-gray-800 mb-2">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="arabic-text text-gray-600">
                        {info.action ? (
                          <a href={info.action} className="hover:text-primary transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="charity-card">
            <CardHeader>
              <CardTitle className="arabic-heading text-primary">تابعنا على</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 space-x-reverse ${social.color} hover:opacity-90 text-white px-4 py-3 rounded-lg transition-all duration-300 charity-button`}
                  >
                    <i className={social.icon}></i>
                    <span className="arabic-text font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="charity-card">
            <CardHeader>
              <CardTitle className="arabic-heading text-primary">موقعنا</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-map-marker-alt text-4xl text-gray-400 mb-2"></i>
                  <p className="arabic-text text-gray-600">خريطة الموقع</p>
                  <p className="arabic-text text-sm text-gray-500">إسطنبول، تركيا</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <Card className="charity-card">
        <CardHeader>
          <CardTitle className="arabic-heading text-primary text-center">الأسئلة الشائعة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold arabic-heading text-gray-800 mb-2">كيف يمكنني التبرع؟</h4>
              <p className="arabic-text text-gray-600 text-sm">
                يمكنك التبرع من خلال صفحة التبرع أو التواصل معنا مباشرة عبر واتساب أو الهاتف.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold arabic-heading text-gray-800 mb-2">هل تصدرون تقارير مالية؟</h4>
              <p className="arabic-text text-gray-600 text-sm">
                نعم، نصدر تقارير مالية شفافة كل ثلاثة أشهر ونرسلها للمتبرعين والأعضاء.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold arabic-heading text-gray-800 mb-2">كيف يمكنني التطوع؟</h4>
              <p className="arabic-text text-gray-600 text-sm">
                تواصل معنا عبر واتساب أو املأ نموذج التواصل وحدد رغبتك في التطوع.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold arabic-heading text-gray-800 mb-2">هل تقبلون التبرعات العينية؟</h4>
              <p className="arabic-text text-gray-600 text-sm">
                نعم، نقبل التبرعات العينية من ملابس وطعام ومستلزمات طبية بعد التنسيق المسبق.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
