import { Row, Col, Card, Button, Divider, Typography, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import Negra from "../../assets/PlayeraNegra.svg"
import Blanca from "../../assets/PlayeraBlanca.svg"
import { useState } from 'react';

const { Title, Text } = Typography;

export const CartPage = () => {

  const [countBlack, setCountBlack] = useState(1);
  const [countWhite, setCountWhite] = useState(1);
  
  return (
    <div className="cart-container">
      <Row>
        <Col>
          <Title level={4} className="cart-title">Your cart</Title>
          <Divider />
          
          <div className="cart-item">
            <div className="cart-item-image">
              <img src={Negra} />
            </div>
            <div className="cart-item-details">
              <Text strong>Raw Black T-Shirt Lineup</Text>
              <Space>
                <Text type="secondary">Color:</Text>
                <div className="color-circle black" />
                <Text type="secondary"> — Size: M</Text>
              </Space>
            </div>
            <div className="cart-item-price">
              <Text strong>$75.00</Text>
            </div>
            <div className="cart-item-quantity">
              <div className="quantity-control">
                <Button className="quantity-button" onClick={() => setCountBlack( countBlack - 1)}>−</Button>
                <div className="quantity-input">{countBlack}</div>
                <Button className="quantity-button" onClick={() => setCountBlack(countBlack + 1)}>+</Button>
              </div>
            </div>
            <div className="cart-item-remove">
              <Button icon={<CloseOutlined />} type="text" />
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-item-image">
              <img src={Blanca} />
            </div>
            <div className="cart-item-details">
              <Text strong>Essential Neutrals</Text>
              <Space>
                <Text type="secondary">Color:</Text>
                <div className="color-circle gray" />
                <Text type="secondary"> — Size: M</Text>
              </Space>
            </div>
            <div className="cart-item-price">
              <Text strong>$22.00</Text>
            </div>
            <div className="cart-item-quantity">
              <div className="quantity-control">
                <Button className="quantity-button" onClick={() => setCountWhite( countWhite - 1)}>−</Button>
                <div className="quantity-input">{countWhite}</div>
                <Button className="quantity-button" onClick={() => setCountWhite( countWhite + 1)}>+</Button>
              </div>
            </div>
            <div className="cart-item-remove">
              <Button icon={<CloseOutlined />} type="text" />
            </div>
          </div>
        </Col>

        <Col>
          <Card className="order-summary">
            <Title level={5}>Order Summary</Title>
            <Divider />
            
            <div className="summary-row">
              <Text type="secondary" >Subtotal</Text>
              <Text strong>$ 90.00</Text>
            </div>
            
            <div className="summary-row">
              <Text type="secondary">Shipping:</Text>
              <Text strong>Free</Text>
            </div>
            
            <div className="summary-row">
              <Text type="secondary">Tax:</Text>
              <Text strong>$ 3.00</Text>
            </div>
            
            <Divider />
            
            <div className="summary-row total">
              <Text strong>Total</Text>
              <Text strong>$ 100.00</Text>
            </div>
            
            <Button type="primary" block className="checkout-button">
              Checkout
            </Button>
            
            <Button type="link" block className="continue-shopping">
              Continue Shopping
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
    
  );
};

