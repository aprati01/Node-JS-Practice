function Student(roll,m1,m2,m3,m4,m5)
{
     this.roll=roll;
     this.marks=m1+m2+m3+m4+m5;

}
Student.prototype.calculateResult=function()
{
     this.totalMarks=this.marks;
     this.percentage=this.totalMarks/5;
     if(this.percentage>60)
          {
               this.division='First';
          }
     else if(this.percentage<60 && this.percentage>45)
          {
               this.division='Second';
          }
     else if(this.percentage<45 && this.percentage>30)
          {
               this.division='Third';
          }
     else{
         this.division='Fail'
     }
     console.log(`Roll Number:${this.roll}`);
     console.log(`Total Marks:${this.totalMarks}`);
     console.log(`Percentage:${this.division}`);
     console.log(`Division"${this.percentage}`)
};
const student1=new Student('1',50,60,70,80,80);
const student2=new Student('2',50,60,80,30,90);
student1.calculateResult();
student2.calculateResult();