import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function TabsComponent() {
  return (
    <div className="p-4">
      <Tabs defaultValue="daily">
        <TabsList>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>
        <TabsContent value="daily">Daily content goes here</TabsContent>
        <TabsContent value="weekly">Weekly content goes here</TabsContent>
        <TabsContent value="monthly">Monthly content goes here</TabsContent>
      </Tabs>
    </div>
  );
}
