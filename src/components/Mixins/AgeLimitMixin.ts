
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class AgeLimitMixin extends Vue {
    public  ageLimit(Age) {
        if(Age > 30){
           alert("U are not eligible for admission")
           return true;
        }
        return false;
     
      }
}