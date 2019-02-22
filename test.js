QUnit.test( "TestArea", function( assert ) 
{
            var res = area(2,10);
            assert.equal( res, "10", "Area of triangle with these inputs will be 10" );
});
         
         
QUnit.test( "TestArea", function( assert ) 
{
            var result = area(8,4);
            assert.equal( result, "16", "Area of triangle with these inputs will be 16" );
});

QUnit.test( "TestArea", function( assert ) 
{
            var res = area(10,10);
            assert.equal( res, "50", "Area of triangle with these inputs will be 50" );
});

QUnit.test( "TestArea", function( assert ) 
{
            var res = area(12,4);
            assert.equal( res, "24", "Area of triangle with these inputs will be 24" );
});

QUnit.test( "TestArea", function( assert ) 
{
            var res = area(2,20);
            assert.equal( res, "20", "Area of triangle with these inputs will be 20" );
});
