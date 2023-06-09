import styled from 'styled-components';


export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  margin-top: 100px;


`
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`
export const CheckoutBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`
export const BoxPlay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const Total = styled.div`
  font-size: 36px;
`/* 
.checkout-container {
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    margin-top: 100px;
  
    .checkout-header {
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid darkgrey;
  
      .header-block {
        text-transform: capitalize;
        width: 23%;
  
        &:last-child {
          width: 8%;
        }
      }
    }
    .box-pay {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 50px;
      gap: 20px;
      margin-top: 40px;
      margin-bottom: 40px;

      .total {
        font-size: 36px;
      }

    }

  } */