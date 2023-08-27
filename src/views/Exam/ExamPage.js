import axiosInstance from "@/utils/axiosInstance";
import Swal from "sweetalert2";
import LogoutComponent from '@/components/LogoutComponent';
import SideBar from '@/components/sidebar/SideBar';
import SweetalertIcon from 'vue-sweetalert-icons';

export default {
    data: () => ({
        Toast: Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        }),
        exams: [
          { name: 'Exam name', description: 'Exam description', duration: '05.05.05', subject: 'Exam subject' },
          { name: 'Exam name', description: 'Exam description Exam description Exam description Exam description Exam description Exam description Exam description Exam description Exam description Exam description Exam description Exam description', duration: '05.05.05', subject: 'Exam subject' },
          { name: 'Exam name', description: 'Exam description', duration: '05.05.05', subject: 'Exam subject' },
          { name: 'Exam name', description: 'Exam description', duration: '05.05.05', subject: 'Exam subject' },
          { name: 'Exam name', description: 'Exam description', duration: '05.05.05', subject: 'Exam subject' },
        ]
    }),
    methods: {
        async logout() {
            await axiosInstance.delete('/auth/logout/')
            .then(() => {
                localStorage.removeItem('token')
                this.$router.push('/login')
                this.Toast.fire({
                    icon: 'success',
                    title: 'Student is logged out'
                  })
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    components: {
        LogoutComponent,
        SideBar,
        SweetalertIcon    
    }
}