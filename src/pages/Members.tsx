
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const members = [
    { id: 1, name: 'عبدالله الكرشي', status: 'غير نشط', lastPayment: '25/05/2025' },
    { id: 2, name: 'محمد شمسي', status: 'نشط', lastPayment: '15/05/2025' },
    { id: 3, name: 'إبراهيم الدرمان', status: 'غير نشط', lastPayment: '20/05/2025' },
    { id: 4, name: 'علي الدوادي', status: 'نشط', lastPayment: '18/05/2025' },
    { id: 5, name: 'زيد بن شحبل', status: 'نشط', lastPayment: '20/05/2025' },
    { id: 6, name: 'كمال بلاعو', status: 'نشط', lastPayment: '22/05/2025' },
    { id: 7, name: 'ام انس', status: 'نشط', lastPayment: '19/05/2025' },
    { id: 8, name: 'ام معاد', status: 'غير نشط', lastPayment: '10/05/2025' },
    { id: 9, name: 'ام مصعب', status: 'غير نشط', lastPayment: '15/05/2025' },
    { id: 10, name: 'ام خالد', status: 'نشط', lastPayment: '21/05/2025' },
    { id: 11, name: 'محمود المنتصر', status: 'غير نشط', lastPayment: '05/05/2025' },
    { id: 12, name: 'حمزة سعيد', status: 'غير نشط', lastPayment: '28/05/2025' },
    { id: 13, name: 'ام سند', status: 'غير نشط', lastPayment: '12/05/2025' },
    { id: 14, name: 'ام محمد', status: 'نشط', lastPayment: '23/05/2025' },
    { id: 15, name: 'احمد بلاعو', status: 'نشط', lastPayment: '20/05/2025' },
    { id: 16, name: 'مالك بلاعو', status: 'غير نشط', lastPayment: '18/05/2025' },
    { id: 17, name: 'يوسف بلاعو', status: 'نشط', lastPayment: '22/05/2025' },
    { id: 18, name: 'انس بلاعو', status: 'نشط', lastPayment: '24/05/2025' },
    { id: 19, name: 'جنه ياسمين', status: 'نشط', lastPayment: '21/05/2025' },
    { id: 20, name: 'محمد شعبان', status: 'غير نشط', lastPayment: '08/05/2025' },
    { id: 21, name: 'محمد الغرابلي', status: 'غير نشط', lastPayment: '14/05/2025' },
    { id: 22, name: 'محمد عبد المجيد', status: 'غير نشط', lastPayment: '22/05/2025' },
    { id: 23, name: 'حسين بلاعو', status: 'غير نشط', lastPayment: '16/05/2025' },
    { id: 24, name: 'محمد الماقوري', status: 'غير نشط', lastPayment: '03/05/2025' },
    { id: 25, name: 'نذير المدني', status: 'نشط', lastPayment: '23/05/2025' },
    { id: 26, name: 'ايمن تاجوراء', status: 'غير نشط', lastPayment: '07/05/2025' },
    { id: 27, name: 'عبدو القماطي', status: 'غير نشط', lastPayment: '19/05/2025' },
    { id: 28, name: 'مويد الغرياني', status: 'غير نشط', lastPayment: '11/05/2025' },
    { id: 29, name: 'صالح الديش', status: 'نشط', lastPayment: '22/05/2025' },
    { id: 30, name: 'أورهان شيليك', status: 'نشط', lastPayment: '24/05/2025' },
    { id: 31, name: 'زاهر احمد', status: 'غير نشط', lastPayment: '09/05/2025' },
    { id: 32, name: 'عبد الرحيم بلاعو', status: 'غير نشط', lastPayment: '13/05/2025' },
    { id: 33, name: 'احمد القايد', status: 'غير نشط', lastPayment: '17/05/2025' },
    { id: 34, name: 'مهمت أينان', status: 'غير نشط', lastPayment: '21/05/2025' },
    { id: 35, name: 'يونس المدني', status: 'نشط', lastPayment: '23/05/2025' },
    { id: 36, name: 'حلا المدني', status: 'نشط', lastPayment: '23/05/2025' },
    { id: 37, name: 'نعمت شعبان', status: 'نشط', lastPayment: '24/05/2025' },
    { id: 38, name: 'محمد الدريدي', status: 'غير نشط', lastPayment: '06/05/2025' },
    { id: 39, name: 'محمد بن إسماعيل', status: 'نشط', lastPayment: '22/05/2025' },
    { id: 40, name: 'عبدو مهارة', status: 'نشط', lastPayment: '21/05/2025' },
    { id: 41, name: 'المقداد الغرابلي', status: 'غير نشط', lastPayment: '04/05/2025' },
    { id: 42, name: 'خالد الغرابلي', status: 'غير نشط', lastPayment: '12/05/2025' },
    { id: 43, name: 'عبد الجبار الغرابلي', status: 'غير نشط', lastPayment: '08/05/2025' },
    { id: 44, name: 'عماد الغرابلي', status: 'غير نشط', lastPayment: '16/05/2025' },
    { id: 45, name: 'عماد كحيل', status: 'غير نشط', lastPayment: '20/05/2025' },
    { id: 46, name: 'عبد الرحيم المغرب', status: 'نشط', lastPayment: '23/05/2025' },
    { id: 47, name: 'شادي زعبيه', status: 'غير نشط', lastPayment: '24/05/2025' },
    { id: 48, name: 'لطفي خميس', status: 'نشط', lastPayment: '22/05/2025' },
    { id: 49, name: 'عبدالله خميس', status: 'نشط', lastPayment: '23/05/2025' },
    { id: 50, name: 'إبراهيم خميس', status: 'نشط', lastPayment: '24/05/2025' },
    { id: 51, name: 'اصيل دالي', status: 'غير نشط', lastPayment: '15/05/2025' },
    { id: 52, name: 'فاطمه الغربي', status: 'نشط', lastPayment: '21/05/2025' },
    { id: 53, name: 'انس بوكر', status: 'نشط', lastPayment: '22/05/2025' },
    { id: 54, name: 'مفتاح مصراته', status: 'نشط', lastPayment: '18/05/2025' },
    { id: 55, name: 'علي', status: 'غير نشط', lastPayment: '10/05/2025' },
    { id: 56, name: 'دكتور عدنان', status: 'غير نشط', lastPayment: '26/05/2025' },
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeMembers = members.filter(member => member.status === 'نشط').length;
  const inactiveMembers = members.filter(member => member.status === 'غير نشط').length;

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold arabic-heading text-primary">
          الأعضاء والمساهمين
        </h1>
        <p className="text-xl arabic-text text-gray-600 max-w-2xl mx-auto leading-relaxed">
          قائمة بجميع أعضاء المجموعة والمساهمين في أعمالنا الخيرية منذ اليوم الأول ولله الحمد
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="charity-card text-center p-6">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-users text-green-600 text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-green-600 arabic-heading mb-2">
              {members.length}
            </div>
            <div className="text-gray-600 arabic-text">إجمالي الأعضاء</div>
          </CardContent>
        </Card>

        <Card className="charity-card text-center p-6">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check-circle text-primary text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-primary arabic-heading mb-2">
              {activeMembers}
            </div>
            <div className="text-gray-600 arabic-text">أعضاء نشطين</div>
          </CardContent>
        </Card>

        <Card className="charity-card text-center p-6">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-times-circle text-red-600 text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-red-600 arabic-heading mb-2">
              {inactiveMembers}
            </div>
            <div className="text-gray-600 arabic-text">أعضاء غير نشطين</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="charity-card">
        <CardHeader>
          <CardTitle className="arabic-heading text-primary">البحث والتصفية</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="ابحث عن عضو بالاسم..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="arabic-text"
              />
            </div>
            <Button
              onClick={() => setSearchTerm('')}
              variant="outline"
              className="arabic-text"
            >
              <i className="fas fa-times ml-2"></i>
              مسح البحث
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Members Table */}
      <Card className="charity-card">
        <CardHeader>
          <CardTitle className="arabic-heading text-primary flex items-center">
            <i className="fas fa-users ml-3"></i>
            قائمة الأعضاء - المشاركين من اليوم الأول
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-right py-4 px-4 arabic-text font-semibold text-gray-700">
                    الاسم الكامل
                  </th>
                  <th className="text-right py-4 px-4 arabic-text font-semibold text-gray-700">
                    حالة العضوية
                  </th>
                  <th className="text-right py-4 px-4 arabic-text font-semibold text-gray-700">
                    تاريخ آخر دفعة
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member) => (
                  <tr
                    key={member.id}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      member.status === 'نشط' ? 'bg-green-50/30' : 'bg-red-50/30'
                    }`}
                  >
                    <td className="py-4 px-4 arabic-text font-medium text-gray-800">
                      {member.name}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center space-x-2 space-x-reverse px-3 py-1 rounded-full text-sm font-medium arabic-text ${
                          member.status === 'نشط'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        <span className="text-lg">
                          {member.status === 'نشط' ? '✅' : '❌'}
                        </span>
                        <span>{member.status}</span>
                      </span>
                    </td>
                    <td className="py-4 px-4 arabic-text text-gray-600">
                      {member.lastPayment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search text-gray-400 text-2xl"></i>
              </div>
              <p className="arabic-text text-gray-500 text-lg">لا توجد نتائج للبحث</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Join Us CTA */}
      <Card className="charity-card bg-gradient-to-r from-primary to-accent text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold arabic-heading mb-4">
            انضم إلى أسرة مجموعة غرباء
          </h3>
          <p className="text-xl arabic-text mb-6 opacity-90">
            كن جزءاً من عائلتنا الكبيرة وساهم في دعم أهل غزة
          </p>
          <a
            href="https://wa.me/905550208605?text=مرحباً، أرغب في الانضمام كعضو جديد في مجموعة غرباء"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 space-x-reverse bg-white text-primary px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 charity-button font-semibold"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            <span className="arabic-text">انضم الآن</span>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default Members;
