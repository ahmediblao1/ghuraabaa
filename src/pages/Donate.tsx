
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Donate = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    amount: '',
    customAmount: '',
    isMonthly: false,
    paymentMethod: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // const presetAmounts = [10, 20, 30, 50, 100];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^[+]?[0-9\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'رقم الهاتف غير صحيح';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!formData.amount && !formData.customAmount) {
      newErrors.amount = 'مبلغ التبرع مطلوب';
    }

    if (!formData.paymentMethod) {
      newErrors.paymentMethod = 'طريقة الدفع مطلوبة';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const amount = formData.amount || formData.customAmount;
      const donationType = formData.isMonthly ? 'شهري' : 'مرة واحدة';
      
      // Create WhatsApp message
      const whatsappMessage = `🤲 طلب تبرع جديد من مجموعة غرباء
      
الاسم: ${formData.name}
الهاتف: ${formData.phone}
البريد الإلكتروني: ${formData.email}
مبلغ التبرع: ${amount}دولار 
نوع التبرع: ${donationType}
طريقة الدفع: ${getPaymentMethodText(formData.paymentMethod)}
${formData.message ? `الرسالة: ${formData.message}` : ''}

يرجى التواصل مع المتبرع لتأكيد التبرع وتنسيق عملية الدفع.`;

      // Send to WhatsApp
      const whatsappUrl = `https://wa.me/905550208605?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "تم إرسال طلب التبرع! 🙏",
        description: `شكراً ${formData.name} على تبرعك بمبلغ ${amount} دولار (${donationType}). سيتم التواصل معك قريباً عبر واتساب.`,
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        amount: '',
        customAmount: '',
        isMonthly: false,
        paymentMethod: '',
        message: ''
      });
    }
  };

  const getPaymentMethodText = (method: string) => {
    const methods: Record<string, string> = {
      'bank': 'تحويل بنكي',
      'hand': 'تسليم يد بيد',
      'whatsapp': 'واتساب (التواصل المباشر)'
    };
    return methods[method] || method;
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const getDonationImpact = () => {
    const amount = parseInt(formData.amount || formData.customAmount) || 0;
    if (amount >= 100) return 'يمكن توفير مساعدات لـ 1 أسره لمدة أسبوع';
    if (amount >= 50) return 'يمكن توفير وجبات ساخنة لـ 5 شخص';
    if (amount >= 30) return 'يمكن توفير أدوية أساسية لـ 3 أشخاص';
    if (amount >= 20) return 'يمكن توفير وجبة ساخنة لـ 2 أشخاص';
    if (amount >= 10) return 'يمكن توفير وجبة ساخنة لـ 1 أشخاص';
    return '';
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8 max-w-4xl">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold arabic-heading text-primary">
          تبرع لدعم أهل غزة
        </h1>
        <p className="text-xl arabic-text text-gray-600 max-w-2xl mx-auto leading-relaxed">
          ساهم معنا في تخفيف معاناة أهل غزة وكن جزءاً من التغيير الإيجابي
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Donation Form */}
        <Card className="charity-card">
          <CardHeader>
            <CardTitle className="arabic-heading text-primary flex items-center">
              <i className="fas fa-hand-holding-heart ml-3"></i>
              نموذج التبرع
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold arabic-heading text-gray-800">المعلومات الشخصية</h3>
                
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
                  <Label htmlFor="phone" className="arabic-text">رقم الهاتف *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+90 555 020 8605"
                    className={`arabic-text ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm arabic-text mt-1">{errors.phone}</p>}
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
              </div>

              {/* Donation Amount */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold arabic-heading text-gray-800">مبلغ التبرع</h3>
                
                {/* <div className="grid grid-cols-3 gap-3">
                  {presetAmounts.map((amount) => (
                    <Button
                      key={amount}
                      type="button"
                      variant={formData.amount === amount.toString() ? "default" : "outline"}
                      onClick={() => {
                        handleInputChange('amount', amount.toString());
                        handleInputChange('customAmount', '');
                      }}
                      className="arabic-text p-3"
                    >
                      {amount} $
                    </Button>
                  ))}
                </div> */}

                <div>
                  <Label htmlFor="customAmount" className="arabic-text">مبلغ آخر (دولار)</Label>
                  <Input
                    id="customAmount"
                    type="number"
                    value={formData.customAmount}
                    onChange={(e) => {
                      handleInputChange('customAmount', e.target.value);
                      handleInputChange('amount', '');
                    }}
                    placeholder="أدخل المبلغ المطلوب"
                    className="arabic-text"
                    min="1"
                  />
                </div>
                {errors.amount && <p className="text-red-500 text-sm arabic-text">{errors.amount}</p>}

                {/* Impact Display */}
                {getDonationImpact() && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <i className="fas fa-heart text-green-600"></i>
                      <p className="arabic-text text-green-800 font-medium">{getDonationImpact()}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Donation Type */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold arabic-heading text-gray-800">نوع التبرع</h3>
                <div className="flex space-x-4 space-x-reverse">
                  <Button
                    type="button"
                    variant={!formData.isMonthly ? "default" : "outline"}
                    onClick={() => handleInputChange('isMonthly', false)}
                    className="arabic-text flex-1"
                  >
                    <i className="fas fa-hand-holding-usd ml-2"></i>
                    مرة واحدة
                  </Button>
                  <Button
                    type="button"
                    variant={formData.isMonthly ? "default" : "outline"}
                    onClick={() => handleInputChange('isMonthly', true)}
                    className="arabic-text flex-1"
                  >
                    <i className="fas fa-calendar-alt ml-2"></i>
                    شهري
                  </Button>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold arabic-heading text-gray-800">طريقة الدفع *</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    // { id: 'bank', label: 'تحويل بنكي', icon: 'fas fa-university' },
                    // { id: 'hand', label: 'تسليم يد بيد', icon: 'fas fa-hand-holding-usd' },
                    { id: 'whatsapp', label: 'واتساب (التواصل المباشر)', icon: 'fab fa-whatsapp' }
                  ].map((method) => (
                    <Button
                      key={method.id}
                      type="button"
                      variant={formData.paymentMethod === method.id ? "default" : "outline"}
                      onClick={() => handleInputChange('paymentMethod', method.id)}
                      className="arabic-text justify-start p-4 h-auto"
                    >
                      <i className={`${method.icon} ml-3`}></i>
                      {method.label}
                    </Button>
                  ))}
                </div>
                {errors.paymentMethod && <p className="text-red-500 text-sm arabic-text">{errors.paymentMethod}</p>}
              </div>

              {/* Special Message */}
              <div>
                <Label htmlFor="message" className="arabic-text">رسالة خاصة (اختياري)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="اكتب رسالة أو ملاحظة خاصة..."
                  className="arabic-text resize-none"
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full charity-button-primary text-lg py-4"
              >
                <i className="fas fa-heart ml-2"></i>
                إرسال طلب التبرع
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Donation Info & Contact */}
        <div className="space-y-6">
          {/* Impact Information */}
          <Card className="charity-card">
            <CardHeader>
              <CardTitle className="arabic-heading text-primary">أثر تبرعك</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-utensils text-green-600 text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold arabic-heading text-gray-800">10 دولار</h4>
                  <p className="arabic-text text-gray-600 text-sm">وجبة ساخنة لـ 2 أشخاص</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-pills text-blue-600 text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold arabic-heading text-gray-800">20 دولار</h4>
                  <p className="arabic-text text-gray-600 text-sm">أدوية أساسية لـ 2 أشخاص</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-home text-orange-600 text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold arabic-heading text-gray-800">100 دولار</h4>
                  <p className="arabic-text text-gray-600 text-sm">مساعدة 1 أسره لمدة أسبوع</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bank Information */}
          <Card className="charity-card">
            <CardHeader>
              <CardTitle className="arabic-heading text-primary">معلومات التحويل البنكي</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="arabic-text">
                <p className="font-semibold">اسم الحساب: مجموعة غرباء للأعمال الخيرية</p>
                <p>رقم الحساب: 0400</p>
                <p>شركة اطلانتس لالالي تركيا </p>
                <p></p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="arabic-text text-yellow-800 text-sm">
                  <i className="fas fa-exclamation-triangle ml-2"></i>
                  يرجى إرسال صورة إيصال التحويل عبر واتساب للتأكيد
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Donation */}
          <Card className="charity-card bg-gradient-to-r from-green-50 to-green-100">
            <CardHeader>
              <CardTitle className="arabic-heading text-green-800">تواصل معنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="arabic-text text-green-700 mb-4">
                للاستفسار أو المساعدة في عملية التبرع
              </p>
              <a
                href="https://wa.me/905550208605?text=مرحباً، أرغب في التبرع لمجموعة غرباء"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 space-x-reverse bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300 charity-button"
              >
                <i className="fab fa-whatsapp text-lg"></i>
                <span className="arabic-text font-medium">تواصل عبر واتساب</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Donate;
