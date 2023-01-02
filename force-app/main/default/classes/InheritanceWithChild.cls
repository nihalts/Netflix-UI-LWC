public class InheritanceWithChild extends InheritanceWithParent {
    public override Double calculateAmount(Integer count){
        System.debug('calculateAmount'+ amount * count *0.1);
        return (amount * count * 0.1);
    }
}