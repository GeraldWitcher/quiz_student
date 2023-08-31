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
        exams: []
    }),
    async created() {
        await this.getActiveExams()
    },
    methods: {

        async getActiveExams() {
            await axiosInstance.get('/exam/active/')
            .then((res) => {
                this.exams = res.data
                console.log(this.exams)
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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6InRlc3QiLCJpZCI6OH0.UQGlM8SKAUlUPZw6sp-BuOMX5n_Ix_qOirS7adFkOFg     test
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFyc2xhbiIsInBhc3N3b3JkIjoiYXJzbGFuIiwiaWQiOjl9.vstm-rOsjHvSa-aiqtoq7xgeM6VehuBdDBfjOnBkgXs   arslan